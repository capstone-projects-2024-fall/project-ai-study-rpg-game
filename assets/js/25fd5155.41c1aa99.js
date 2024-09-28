"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[7054],{42460:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var a=n(74848),r=n(28453);const i={sidebar_position:2},s="Class Diagrams",c={id:"system-architecture/classDiagrams",title:"Class Diagrams",description:"Front End Class Diagram",source:"@site/docs/system-architecture/classDiagrams.md",sourceDirName:"system-architecture",slug:"/system-architecture/classDiagrams",permalink:"/project-ai-study-rpg-game/docs/system-architecture/classDiagrams",draft:!1,unlisted:!1,editUrl:"https://github.com/capstone-projects-2024-fall/project-ai-study-rpg-game/edit/main/documentation/docs/system-architecture/classDiagrams.md",tags:[],version:"current",lastUpdatedBy:"JordanSantoli",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"design",permalink:"/project-ai-study-rpg-game/docs/system-architecture/design"},next:{title:"Development Environment",permalink:"/project-ai-study-rpg-game/docs/system-architecture/development-environment"}},l={},o=[{value:"Front End Class Diagram",id:"front-end-class-diagram",level:2},{value:"Back End Class Diagram",id:"back-end-class-diagram",level:2}];function d(e){const t={h1:"h1",h2:"h2",mermaid:"mermaid",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"class-diagrams",children:"Class Diagrams"}),"\n",(0,a.jsx)(t.h2,{id:"front-end-class-diagram",children:"Front End Class Diagram"}),"\n",(0,a.jsx)(t.h2,{id:"back-end-class-diagram",children:"Back End Class Diagram"}),"\n",(0,a.jsx)(t.mermaid,{value:'classDiagram\n \n\n\n  class PlayerSerializer{\n    -int Player_Id\n    -int canvas\n    -String First_Name\n    -String Last_Name\n    +GetUserData(int Player_Id) JSON "canvas, First_Name, Last_Name"\n  }\n\n\n  class playerView{\n    +createPlayer(JSON playerObject)\n    +updatePlayer(JSON playerObject)\n    -deletePlayer(JSON playerObject)\n  }\n\n\n  class characterSerializer{\n    -int Character_Id\n    -String Name\n    -String class\n    -int level\n    -int health\n    -int Player_Id\n    -int Assignment_Id\n    -int Battle_Id\n    -int Inventory_Id\n    +GetCharacterByPlayerId(int Player_Id) JSON "name, class, level, health, Battle_Id, Inventory_Id"\n    +GetCurrentAssignment(int Player_Id) JSON "Player_Id, Assignment_Id"\n    +GetInventory(int Player_Id, int Inventory_Id) JSON "List of items"\n  }\n \n  class characterView{\n    +UpdateCharacter(JSON characterObject)\n    +CreateCharacter(JSON characterObject)\n  }\n\n\n  class questSerializer{\n    -int Assignment_Id\n    -String Assignment_Name\n    -String description\n    -int reward\n    -String difficulty\n    +GetQuest(int Assignment_Id) JSON "Assignment_Id, Assignment_Name, description, reward, difficulty"\n  }\n\n\n  class questView{\n    +CreateQuest(JSON questObject)\n    +UpdateQuest(JSON questObject)\n    -FinishQuest(JSON questObject)\n  }\n\n\n  class battleSerializer{\n    -int Battle_Id\n    -String Assignment_Name\n    -boolean Victory_Status\n    -int Exp_Gained\n    +GetBattle(int Character_Id) JSON "Battle_Id, Assignment_Name, Victory_Status, int Exp_Gained"\n  }\n\n\n  class battleView{\n    +CreateBattle(JSON battleObject)\n    +UpdateBattle(JSON battleObject)\n    -FinishBattle(JSON battleObject)\n  }\n\n\n  class storeSerializer{\n    -int store_id\n    -String store_name\n    -int Character_Id\n    -int item_id\n    +GetStoreItems(int store_id) JSON "list of items"\n    +GetStoreItemsByCharacterId(int Character_Id) JSON "list of items"\n  }\n\n\n  class storeView{\n    +UpdateStore(JSON storeObject)\n    +PurchaseItem(int item_id, int Character_Id)\n  }\n\n\n  class itemSerializer{\n    -int item_id\n    -String item_name\n    -boolean weapon\n    -boolean armor\n  }\n\n\n  class itemView{\n    +AddItem(JSON itemObject)\n    -RemoveItem(JSON itemObject)\n  }\n\n\n  class inventorySerializer{\n    -int inventory_id\n    -int quantity\n  }\n\n\n  class inventoryView{\n    +updateInventory(JSON inventoryObject)\n  }\n\n\n  PlayerSerializer<--\x3eplayerView\n  characterSerializer<--\x3echaracterView\n  questSerializer<--\x3equestView\n  characterSerializer--|>questSerializer\n  PlayerSerializer --|>characterSerializer\n  battleSerializer <--\x3e battleView\n  battleSerializer --|>questSerializer\n  storeSerializer <--\x3e storeView\n  storeSerializer --|> characterSerializer\n  itemSerializer <--\x3e itemView\n  storeSerializer --|> itemSerializer\n  inventorySerializer <--\x3e inventoryView\n  characterSerializer --|> inventorySerializer'})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var a=n(96540);const r={},i=a.createContext(r);function s(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);