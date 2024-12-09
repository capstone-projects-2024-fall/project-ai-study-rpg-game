"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[7054],{42460:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>g,contentTitle:()=>r,default:()=>l,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=s(74848),t=s(28453);const i={sidebar_position:2},r="Class Diagrams",o={id:"system-architecture/classDiagrams",title:"Class Diagrams",description:"Front End Class Diagram",source:"@site/docs/system-architecture/classDiagrams.md",sourceDirName:"system-architecture",slug:"/system-architecture/classDiagrams",permalink:"/project-ai-study-rpg-game/docs/system-architecture/classDiagrams",draft:!1,unlisted:!1,editUrl:"https://github.com/capstone-projects-2024-fall/project-ai-study-rpg-game/edit/main/documentation/docs/system-architecture/classDiagrams.md",tags:[],version:"current",lastUpdatedBy:"Barry",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"design",permalink:"/project-ai-study-rpg-game/docs/system-architecture/design"},next:{title:"Development Environment",permalink:"/project-ai-study-rpg-game/docs/system-architecture/development-environment"}},g={},c=[{value:"Front End Class Diagram",id:"front-end-class-diagram",level:2}];function m(n){const e={h1:"h1",h2:"h2",mermaid:"mermaid",...(0,t.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"class-diagrams",children:"Class Diagrams"}),"\n",(0,a.jsx)(e.h2,{id:"front-end-class-diagram",children:"Front End Class Diagram"}),"\n",(0,a.jsx)(e.mermaid,{value:' \nclassDiagram \n\n  class App{\n   +width: int 1000\n   +height:int 700\n   +music_loop() void\n  }\n\n  class LoginPage{\n    +username:string\n    -password:string\n    +login_page()\n  }\n  class SignupPage{\n    -Name: string\n    +Username: string\n    -Password: string\n    +sign_up() void\n  }\n\n  class CustomizeCharacterPage{\n    -totalSlots\n    -currentLevel\n    -availableslots\n    -unavailableslots\n    +addGold(int)\n    +removeGold(int)\n    +removeItem()\n    +addItem()\n\n    \n  }\n  class TutorialPage{\n    + text: string\n  }\n\n  class MainMenuPage{\n    + screen: int\n    +character_page()\n    +store_page()\n    +help()\n    +tutorial() void\n    +settings() void\n    +start_map_page()\n    +assignment_page()\n    +stopStartMusic()void\n\n  }\n  \n  class AssignmentsPage{\n    +Goal:string\n    +itemReward: Item\n    +ExpReward:int\n    +Goldreward:int\n    +Assignments() void\n    +Quizzes() void\n    +Lab()\n    +Discussian()\n  }\n\n  class ProgressPage{\n    +AssignmentInProgress: string\n    +Gold:int\n    +EXP:int\n\n  }\n  class AssignmentListPage{\n    +RenderAllAssignment()void\n  }\n\n\n  class MapPage{\n    -camera\n    -player\n    -controls\n    +NPC(assignment)\n    +movement() void\n    +interaction_button()\n    +generate_map()\n    +LoadAssignments()\n    +currentGame()\n    +AssignmentInProgress()void\n    +ListWeekAssignment()void\n\n  }\n  \n  class MapBanner{\n    +helpPage:string\n    +changeMap()void\n\n  }\n\n\n\n\n  class CharacterPage{\n    -currentLevel\n    -currentEXP\n    -currentGOLD\n    -currentItems\n\n  } \n  class StorePage{\n    -armor:int \n    -classofWeapon:string\n    -Goldcost:int\n    -LevelReq:int\n  }\n\n  class MainMenuSettingsPage{\n    +Logout\n    +reconnectCanvas\n\n\n  }\n  class MainMenuHelpPage{\n    + text:string\n\n  }\n\n class AssignmentSettingsPage{\n    +addAssignment\n    +deleteAssignment\n    +modifyAssignment\n    +reloadAssignments\n }\n\nclass Equipment{\n    +rarirty:int\n    +cost:int\n    +classreq:string\n    +damage:int\n    \n    \n}\n\nclass Weapon{\n    +rarirty:int\n    +cost:int\n    +classreq:string\n    +damage:int\n    \n}\n\n  App*--LoginPage :Contains\n  App*--SignupPage :Contains\n  StorePage "1"<-- "1..*" Equipment\n  StorePage "1"<-- "1..*"Weapon\n\n  LoginPage  o--MainMenuPage\n  MainMenuPage o--CustomizeCharacterPage\n  SignupPage  *--TutorialPage :Contains\n  SignupPage o--MainMenuPage\n\n\n\n  MainMenuPage o--AssignmentsPage \n  MapPage o--AssignmentsPage \n  MainMenuPage o--MapPage\n  MainMenuPage o--CharacterPage\n  CustomizeCharacterPage o--StorePage\n  MainMenuPage o--MainMenuSettingsPage\n  MainMenuPage o--MainMenuHelpPage \n  \n\n  AssignmentsPage<--ProgressPage\n  AssignmentsPage<--AssignmentListPage\n\n  AssignmentsPage *--AssignmentSettingsPage :Contains\n  \n  MapPage o--MapBanner\n\n\n\n\n  '})]})}function l(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(m,{...n})}):m(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>r,x:()=>o});var a=s(96540);const t={},i=a.createContext(t);function r(n){const e=a.useContext(i);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),a.createElement(i.Provider,{value:e},n.children)}}}]);