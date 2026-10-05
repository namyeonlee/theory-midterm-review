export const KEY='mcm4360-jeopardy-v1';
export function fresh(){return {revision:0,teams:Array.from({length:4},(_,i)=>({id:i,name:`Team ${i+1}`,score:0})),done:[],active:null,revealed:false,awarded:[],seconds:30,endAt:null,remaining:30,history:[]};}
export function timeLeft(s,now=Date.now()){return s.endAt===null?s.remaining:Math.max(0,Math.ceil((s.endAt-now)/1000));}
export function award(s,id,value){const team=s.teams.find(t=>t.id===id);if(!team)return;if(s.awarded.includes(id)){team.score-=value;s.awarded=s.awarded.filter(x=>x!==id);}else{team.score+=value;s.awarded.push(id);}}
export function complete(s){if(!s.active)return;s.done=[...new Set([...s.done,s.active])];s.history.push({id:s.active,awarded:[...s.awarded]});s.active=null;s.revealed=false;s.awarded=[];s.endAt=null;s.remaining=s.seconds;}
export function undo(s,questions){if(s.active||!s.history.length)return;const last=s.history.pop(),q=questions.find(q=>q.id===last.id);for(const id of last.awarded){const t=s.teams.find(t=>t.id===id);if(t)t.score-=q.value;}s.done=s.done.filter(x=>x!==last.id);s.active=last.id;s.revealed=false;s.awarded=[];s.endAt=null;s.remaining=s.seconds;}
