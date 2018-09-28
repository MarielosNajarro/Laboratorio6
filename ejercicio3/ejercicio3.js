function countBy(items, groupName){
	let counts = [];
	for(let item of items){
		let name = groupName(item);
		let know = counts.findIndex(c=> c.name==name);
		if(know == -1){
			counts.push({name, count:1});
		}else{
			counts[know].counts++;
		}
		return counts;
	}
}
console.log(countBy(['1',2,{a:1}], item => typeof item));

function list(items){
	for(let item of items){
	console.log(item.name, ",",items.count);
	}
}