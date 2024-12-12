"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[7054],{42460:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>g,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var s=a(74848),t=a(28453);const i={sidebar_position:2},r="Design Overview",o={id:"system-architecture/classDiagrams",title:"Design Overview",description:"Front End Class Diagram",source:"@site/docs/system-architecture/classDiagrams.md",sourceDirName:"system-architecture",slug:"/system-architecture/classDiagrams",permalink:"/project-ai-study-rpg-game/docs/system-architecture/classDiagrams",draft:!1,unlisted:!1,editUrl:"https://github.com/capstone-projects-2024-fall/project-ai-study-rpg-game/edit/main/documentation/docs/system-architecture/classDiagrams.md",tags:[],version:"current",lastUpdatedBy:"tug94192",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"System Architecture",permalink:"/project-ai-study-rpg-game/docs/category/system-architecture"},next:{title:"Development Environment",permalink:"/project-ai-study-rpg-game/docs/system-architecture/development-environment"}},g={},c=[{value:"Front End Class Diagram",id:"front-end-class-diagram",level:2},{value:"Entity Relationship (ER) Diagram",id:"entity-relationship-er-diagram",level:2},{value:"Relational Diagram",id:"relational-diagram",level:2}];function l(n){const e={h1:"h1",h2:"h2",img:"img",mermaid:"mermaid",p:"p",...(0,t.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"design-overview",children:"Design Overview"}),"\n",(0,s.jsx)(e.h2,{id:"front-end-class-diagram",children:"Front End Class Diagram"}),"\n",(0,s.jsx)(e.mermaid,{value:' \nclassDiagram \n\n  class App{\n   +width: int 1000\n   +height:int 700\n   +music_loop() void\n  }\n\n  class LoginPage{\n    +username:string\n    -password:string\n    +login_page()\n  }\n  class SignupPage{\n    -Name: string\n    +Username: string\n    -Password: string\n    +sign_up() void\n  }\n\n  class CustomizeCharacterPage{\n    -totalSlots\n    -currentLevel\n    -availableslots\n    -unavailableslots\n    +addGold(int)\n    +removeGold(int)\n    +removeItem()\n    +addItem()\n\n    \n  }\n  class TutorialPage{\n    + text: string\n  }\n\n  class MainMenuPage{\n    + screen: int\n    +character_page()\n    +store_page()\n    +help()\n    +tutorial() void\n    +settings() void\n    +start_map_page()\n    +assignment_page()\n    +stopStartMusic()void\n\n  }\n  \n  class AssignmentsPage{\n    +Goal:string\n    +itemReward: Item\n    +ExpReward:int\n    +Goldreward:int\n    +Assignments() void\n    +Quizzes() void\n    +Lab()\n    +Discussian()\n  }\n\n  class ProgressPage{\n    +AssignmentInProgress: string\n    +Gold:int\n    +EXP:int\n\n  }\n  class AssignmentListPage{\n    +RenderAllAssignment()void\n  }\n\n\n  class MapPage{\n    -camera\n    -player\n    -controls\n    +NPC(assignment)\n    +movement() void\n    +interaction_button()\n    +generate_map()\n    +LoadAssignments()\n    +currentGame()\n    +AssignmentInProgress()void\n    +ListWeekAssignment()void\n\n  }\n  \n  class MapBanner{\n    +helpPage:string\n    +changeMap()void\n\n  }\n\n\n\n\n  class CharacterPage{\n    -currentLevel\n    -currentEXP\n    -currentGOLD\n    -currentItems\n\n  } \n  class StorePage{\n    -armor:int \n    -classofWeapon:string\n    -Goldcost:int\n    -LevelReq:int\n  }\n\n  class MainMenuSettingsPage{\n    +Logout\n    +reconnectCanvas\n\n\n  }\n  class MainMenuHelpPage{\n    + text:string\n\n  }\n\n class AssignmentSettingsPage{\n    +addAssignment\n    +deleteAssignment\n    +modifyAssignment\n    +reloadAssignments\n }\n\nclass Equipment{\n    +rarirty:int\n    +cost:int\n    +classreq:string\n    +damage:int\n    \n    \n}\n\nclass Weapon{\n    +rarirty:int\n    +cost:int\n    +classreq:string\n    +damage:int\n    \n}\n\n  App*--LoginPage :Contains\n  App*--SignupPage :Contains\n  StorePage "1"<-- "1..*" Equipment\n  StorePage "1"<-- "1..*"Weapon\n\n  LoginPage  o--MainMenuPage\n  MainMenuPage o--CustomizeCharacterPage\n  SignupPage  *--TutorialPage :Contains\n  SignupPage o--MainMenuPage\n\n\n\n  MainMenuPage o--AssignmentsPage \n  MapPage o--AssignmentsPage \n  MainMenuPage o--MapPage\n  MainMenuPage o--CharacterPage\n  CustomizeCharacterPage o--StorePage\n  MainMenuPage o--MainMenuSettingsPage\n  MainMenuPage o--MainMenuHelpPage \n  \n\n  AssignmentsPage<--ProgressPage\n  AssignmentsPage<--AssignmentListPage\n\n  AssignmentsPage *--AssignmentSettingsPage :Contains\n  \n  MapPage o--MapBanner'}),"\n",(0,s.jsx)(e.h2,{id:"entity-relationship-er-diagram",children:"Entity Relationship (ER) Diagram"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"ER_Diagram",src:a(40498).A+"",width:"1461",height:"812"})}),"\n",(0,s.jsx)(e.h1,{id:"back-end",children:"Back End"}),"\n",(0,s.jsx)(e.h2,{id:"relational-diagram",children:"Relational Diagram"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"Relational",src:a(39407).A+"",width:"885",height:"609"})})]})}function m(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(l,{...n})}):l(n)}},40498:(n,e,a)=>{a.d(e,{A:()=>s});const s=a.p+"assets/images/ERD-30bc55b80cae8364c51275677368c23f.png"},39407:(n,e,a)=>{a.d(e,{A:()=>s});const s=a.p+"assets/images/Relational-ecbfc44f1f5ed4fbd5947db432c83a29.webp"},28453:(n,e,a)=>{a.d(e,{R:()=>r,x:()=>o});var s=a(96540);const t={},i=s.createContext(t);function r(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);