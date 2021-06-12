// input data

const friends = [{
  username: 'David',
  status: 'online',
  lastActivity: 10
}, {
  username: 'Lucy',
  status: 'offline',
  lastActivity: 22
}, {
  username: 'Bob',
  status: 'online',
  lastActivity: 104
}];

// solution

const whosOnline = (friends) => {
  const whosonline = {
    online : [],
    offline : [],
    away : []
  }
  for(let a of friends){
    if(a['status'] == 'online' && a['lastActivity'] <= 10){
      whosonline['online'].push(a['username']);
    }
    else if(a['status'] == 'offline'){
      whosonline['offline'].push(a['username']);
    }
    else{
      whosonline['away'].push(a['username']);
    }
  }
  if(whosonline['online'].length == 0){
    delete whosonline['online'];
  }
  if(whosonline['offline'].length == 0){
    delete whosonline['offline'];
  }
  if(whosonline['away'].length == 0){
    delete whosonline['away'];
  }
  return whosonline;
}

// control

console.log(whosOnline(friends));
