# [All Star Code Challenge #1](https://www.codewars.com/kata/5863f97fb3a675d9a700003f) #

## This Kata is intended as a small challenge for my students ##

All Star Code Challenge #1

Write a function, called sumPPG, that takes two NBA player objects/struct/Hash/Dict/Class and sums their PPG

_Examples:_

    function NBAplayer(name, team, ppg){
      this.name=name;
      this.team=team;
      this.ppg=ppg;
    }

    var iverson = new NBAplayer("Iverson", "76ers", 11.2);
    var jordan = new NBAplaer("Jordan", "bulls", 20.2);
    sumPPG(iverson, jordan); // => 31.4