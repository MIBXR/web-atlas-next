import { initialStatus } from './data';

export function createSoundFeedback(status: (text: string) => void, onEnabled: (enabled: boolean) => void) {
  let context: AudioContext | undefined, oscillator: OscillatorNode | undefined, enabled=false, revision=0;
  function stop() { oscillator?.stop(); oscillator=undefined; }
  function close() { revision++; stop(); const previous=context; context=undefined; enabled=false; onEnabled(false); void previous?.close(); }
  function mute() { close(); status('声音关闭 · 文字反馈仍可用。'); }
  async function toggle() {
    if(enabled) { mute(); return; }
    const Audio=window.AudioContext || (window as Window & {webkitAudioContext?: typeof AudioContext}).webkitAudioContext;
    if(!Audio) { status('此浏览器不支持示意声音，仍可使用文字反馈。'); return; }
    context ||= new Audio();
    const current=++revision;
    try { await context.resume(); }
    catch { if(current===revision)status('声音未能启用，请继续使用文字反馈。'); return; }
    if(current!==revision)return;
    enabled=context.state==='running'; onEnabled(enabled);
    status(enabled?'声音已启用 · 点击确认播放短音。':'声音未能启用。');
  }
  function confirm() {
    status(enabled?'操作已确认 · 短音反馈。':'操作已确认 · 当前静音。');
    if(!enabled)return;
    stop(); const audio=context!, note=audio.createOscillator(), gain=audio.createGain(); oscillator=note;
    note.type='sine'; note.frequency.setValueAtTime(660,audio.currentTime);
    gain.gain.setValueAtTime(0,audio.currentTime); gain.gain.linearRampToValueAtTime(.08,audio.currentTime+.01); gain.gain.exponentialRampToValueAtTime(.0001,audio.currentTime+.12);
    note.connect(gain); gain.connect(audio.destination); note.start();
    note.onended=() => { note.disconnect(); gain.disconnect(); if(oscillator===note)oscillator=undefined; }; note.stop(audio.currentTime+.13);
  }
  const visibility=() => { if(document.hidden)mute(); };
  const restore=(event: PageTransitionEvent) => { if(event.persisted) { close(); status(initialStatus('sound')); } };
  document.addEventListener('visibilitychange',visibility); window.addEventListener('pagehide',close); window.addEventListener('pageshow',restore);
  return {toggle,confirm,dispose:() => { close(); document.removeEventListener('visibilitychange',visibility); window.removeEventListener('pagehide',close); window.removeEventListener('pageshow',restore); }};
}
