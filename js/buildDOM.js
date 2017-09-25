var appendChildByClass = function(element, child){
  var el = document.getElementsByClassName(element)[0]
  return el.appendChild(child)
}
var removeChild = function(element, child){
  var el = document.getElementsByClassName(element)[0]
  var childEl = document.getElementsByClassName(child)[0]
  return el.removeChild(childEl)
}
var changeClass = function(element, newClass){
  var el = document.getElementsByClassName(element)[0]
  el.className = newClass
  return el.className
}
var createElement = function(type, className){
  var el = document.createElement(type) 
  el.className = className
  return el
}

var newText = function(element, text){
  var el = document.getElementsByClassName(element)[0]
  el.innerHTML = ''
  return appendChildByClass(element, document.createTextNode(text))
}

var formatStatsLabel = function(datas){
  //label = label.split('_').map(word => (word[0].toUpperCase() + word.slice(1)))
  var label = datas.split('_')
  console.log('test')
  for(var i=0; i<label.length; i++){
    label[i] = label[i].charAt(0).toUpperCase() + label[i].slice(1)
  }
  console.log('test')
  console.log(label)
  return label.join(' ')
}

var insertStatistics = function(statistic){
  var stats = createElement('div', 'statistic')
  var statsLabel = createElement('div', 'statistic__label')
  statsLabel.innerHTML = formatStatsLabel(statistic.name)
  var statsValue = createElement('div', 'statistic__value')
  statsValue.innerHTML = statistic.value

  stats.appendChild(statsLabel)
  stats.appendChild(statsValue)
  return stats
}

var generateStats = function(statistics){
  var el = createElement('div', 'statistics')
  for(var i=0; i<statistics.length; i++){
    el.appendChild(insertStatistics(statistics[i]))
  }
  return el
}

var getFullName = function(playerData){
  return playerData.player.name.first+" "+playerData.player.name.last
}

var insertNewData = function(playerData){
  console.log(playerData)
  newText('data__title', getFullName(playerData))
  newText('data__position', playerData.player.info.positionInfo)
  newText('data__icon', playerData.player.currentTeam.id)
  //process statistics
  changeClass('card__heading', 'card__heading image-'+playerData.player.id)
  removeChild('data', 'statistics')
  //document.getElementsByClassName('statistics')[0].innerHTML=''
  appendChildByClass('data', generateStats(playerData.stats))
}

var mapClickAction = function(arg, func){
  return function(){
    func(arg)
  }
}

var buildLinks = function(playerData){
  console.log('build links')
  console.log(stats.players)
  for(var i=0; i<playerData.length; i++){
    var button = createElement('button', 'dropdown-option')
    button.innerHTML = getFullName(playerData[i])
    button.onclick = mapClickAction(playerData[i], insertNewData)
    appendChildByClass(
      'dropdown-content', button)
  }
}
