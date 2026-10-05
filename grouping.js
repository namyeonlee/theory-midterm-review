export function parseNames(text){return text.split(/[\n\r,;\t]+/).map(s=>s.trim()).filter(Boolean);}
function randomIndex(max){const limit=0x100000000-(0x100000000%max);const a=new Uint32Array(1);do{crypto.getRandomValues(a);}while(a[0]>=limit);return a[0]%max;}
export function makeGroups(names,count,choose=randomIndex){
 if(!Number.isInteger(count)||count<2||count>6)throw new Error('Choose 2–6 teams.');
 if(names.length<count)throw new Error(`Add at least ${count} names, or choose fewer teams.`);
 if(names.length>200)throw new Error('Use up to 200 names.');
 const shuffled=[...names];for(let i=shuffled.length-1;i>0;i--){const j=choose(i+1);[shuffled[i],shuffled[j]]=[shuffled[j],shuffled[i]];}
 const groups=Array.from({length:count},(_,id)=>({id,name:`Team ${id+1}`,score:0,members:[]}));
 shuffled.forEach((name,i)=>groups[i%count].members.push(name));return groups;
}
