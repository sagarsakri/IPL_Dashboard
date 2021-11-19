(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){},28:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(18),r=c.n(s),i=(c(25),c(26),c(8)),j=c.n(i),h=c(10),l=c(11),m=c(6),o=(c(28),c(0)),d=function(e){var t=e.teamName,c=e.match;if(!c)return null;var a=c.team1===t?c.team2:c.team1,n="/teams/".concat(a),s=t===c.matchWinner;return Object(o.jsxs)("div",{className:s?"MatchDetailCard won-card":"MatchDetailCard lost-card",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{className:"vs",children:"vs"}),Object(o.jsxs)("h1",{children:[" ",Object(o.jsx)(m.b,{to:n,children:a})]}),Object(o.jsx)("h2",{className:"match-date",children:c.date}),Object(o.jsxs)("h3",{className:"match-venue",children:["at ",c.venue]}),Object(o.jsxs)("h3",{className:"match-result",children:[c.matchWinner," won by ",c.resultMargin," ",c.result," "]})]}),Object(o.jsxs)("div",{className:"additional-details",children:[Object(o.jsx)("h3",{children:"First Innings"}),Object(o.jsx)("p",{children:c.team1}),Object(o.jsx)("h3",{children:"Second Innings"}),Object(o.jsx)("p",{children:c.team2}),Object(o.jsx)("h3",{children:"Player Of the Match"}),Object(o.jsx)("p",{children:c.playerOfMatch}),Object(o.jsx)("h3",{children:"Umpires"}),Object(o.jsxs)("p",{children:[c.umpire1," , ",c.umpire2]})]})]})},u=(c(35),function(e){var t=e.teamName,c=e.match;if(!c)return null;var a=c.team1===t?c.team2:c.team1,n="/teams/".concat(a),s=t===c.matchWinner;return Object(o.jsxs)("div",{className:s?"MatchSmallCard won-card":"MatchSmallCard lost-card",children:[Object(o.jsx)("span",{className:"vs",children:"vs "}),Object(o.jsx)("h3",{children:Object(o.jsx)(m.b,{to:n,children:a})}),Object(o.jsxs)("p",{className:"match-result",children:[c.matchWinner," won by ",c.resultMargin," ",c.result]})]})}),b=c(2),O=c(20),x=(c(36),function(){var e=Object(a.useState)({matches:[]}),t=Object(l.a)(e,2),c=t[0],n=t[1],s=Object(b.f)().teamName;return Object(a.useEffect)((function(){var e=function(){var e=Object(h.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("","/team/").concat(s));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[s]),c&&c.teamName?Object(o.jsxs)("div",{className:"TeamPage",children:[Object(o.jsx)("div",{className:"team-name-section",children:Object(o.jsx)("h1",{className:"team-name",children:c.teamName})}),Object(o.jsxs)("div",{className:"win-loss-section",children:["Win / losses",Object(o.jsx)(O.PieChart,{data:[{title:"Losses",value:c.totalMatchesPlayed-c.totalWins,color:"rgb(92, 20, 20)"},{title:"Wins",value:c.totalWins,color:"rgb(68, 146, 32)"}]})]}),Object(o.jsxs)("div",{className:"match-detail-section",children:[Object(o.jsx)("h3",{children:"Latest Matches"}),Object(o.jsx)(d,{teamName:c.teamName,match:c.matches[0]})]}),c.matches.slice(1).map((function(e){return Object(o.jsx)(u,{teamName:c.teamName,match:e},e.id)})),Object(o.jsx)("div",{className:"more-link",children:Object(o.jsxs)(m.b,{to:"/teams/".concat(s,"/matches/").concat("2020"),children:["More ",">"," "]})})]}):Object(o.jsx)("h2",{children:"Team Not Found"})}),f=(c(37),c(38),function(e){for(var t=e.teamName,c=[],a="2008";a<="2020";a++)c.push(a);return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("ul",{className:"YearSelector",children:c.map((function(e){return Object(o.jsx)("li",{children:Object(o.jsx)(m.b,{to:"/teams/".concat(t,"/matches/").concat(e),children:e})},e)}))})})}),v=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),c=t[0],n=t[1],s=Object(b.f)(),r=s.teamName,i=s.year;return Object(a.useEffect)((function(){var e=function(){var e=Object(h.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("","/team/").concat(r,"/matches?year=").concat(i));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[r,i]),Object(o.jsxs)("div",{className:"MatchPage",children:[Object(o.jsxs)("div",{className:"year-selector",children:[Object(o.jsx)("h3",{children:"Select Year "}),Object(o.jsx)(f,{teamName:r})]}),Object(o.jsxs)("div",{children:[Object(o.jsxs)("h2",{className:"page-heading",children:[r," Matches in ",i," "]}),0===c.length?Object(o.jsx)("h3",{children:"No Matches Found"}):c.map((function(e){return Object(o.jsx)(d,{teamName:r,match:e},e.id)}))]})]})},p=(c(39),function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(h.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("","/teams"));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),c?Object(o.jsxs)("div",{className:"HomePage",children:[Object(o.jsx)("h1",{className:"app-Name",children:"Welcome to IPL DashBoard"}),Object(o.jsx)("div",{className:"team-list",children:c.map((function(e){return Object(o.jsx)("div",{children:Object(o.jsx)("h1",{children:Object(o.jsx)(m.b,{to:"/teams/".concat(e.teamName),children:e.teamName})})},e.id)}))})]}):Object(o.jsx)("h1",{children:"!!! The Teams Not Found !!!"})});var N=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(m.a,{children:Object(o.jsxs)(b.c,{children:[Object(o.jsx)(b.a,{exact:!0,path:"/teams/:teamName",children:Object(o.jsx)(x,{})}),Object(o.jsx)(b.a,{path:"/teams/:teamName/matches/:year",children:Object(o.jsx)(v,{})}),Object(o.jsx)(b.a,{path:"/",children:Object(o.jsx)(p,{})})]})})})};r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(N,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.acef392e.chunk.js.map