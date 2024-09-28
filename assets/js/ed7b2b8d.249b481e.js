"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[3791],{23514:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var n=t(74848),a=t(28453);const r={sidebar_position:1},i="Entity Relationship (ER) Diagram",c={id:"system-architecture/design",title:"design",description:"Purpose",source:"@site/docs/system-architecture/design.md",sourceDirName:"system-architecture",slug:"/system-architecture/design",permalink:"/project-ai-study-rpg-game/docs/system-architecture/design",draft:!1,unlisted:!1,editUrl:"https://github.com/capstone-projects-2024-fall/project-ai-study-rpg-game/edit/main/documentation/docs/system-architecture/design.md",tags:[],version:"current",lastUpdatedBy:"IskraLlupa25",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"System Architecture",permalink:"/project-ai-study-rpg-game/docs/category/system-architecture"},next:{title:"Development Environment",permalink:"/project-ai-study-rpg-game/docs/system-architecture/development-environment"}},o={},p=[{value:"Use case 5",id:"use-case-5",level:2},{value:"Use case 6",id:"use-case-6",level:2},{value:"Use case 7",id:"use-case-7",level:2},{value:"Use case 8",id:"use-case-8",level:2}];function l(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Purpose"})}),"\n",(0,n.jsx)(s.p,{children:"The Design Document - Part I Architecture describes the software architecture and how the requirements are mapped into the design. This document will be a combination of diagrams and text that describes what the diagrams are showing."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Requirements"})}),"\n",(0,n.jsx)(s.p,{children:"In addition to the general requirements the Design Document - Part I Architecture will contain:"}),"\n",(0,n.jsx)(s.p,{children:"A description the different components and their interfaces. For example: client, server, database."}),"\n",(0,n.jsx)(s.p,{children:"For each component provide class diagrams showing the classes to be developed (or used) and their relationship."}),"\n",(0,n.jsxs)(s.p,{children:["Sequence diagrams showing the data flow for ",(0,n.jsx)(s.em,{children:"all"})," use cases.\xa0One sequence diagram corresponds to one use case and different use cases should have different corresponding sequence diagrams."]}),"\n",(0,n.jsx)(s.p,{children:"Describe algorithms employed in your project, e.g. neural network paradigm, training and training data set, etc."}),"\n",(0,n.jsx)(s.p,{children:"If there is a database:"}),"\n",(0,n.jsx)(s.p,{children:"Entity-relation diagram."}),"\n",(0,n.jsx)(s.p,{children:"Table design."}),"\n",(0,n.jsx)(s.h1,{id:"entity-relationship-er-diagram",children:"Entity Relationship (ER) Diagram"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"ER_Diagram",src:t(40498).A+"",width:"1461",height:"812"})}),"\n",(0,n.jsx)(s.h1,{id:"relational-diagram",children:"Relational Diagram"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Relational",src:t(39407).A+"",width:"885",height:"609"})}),"\n",(0,n.jsxs)(s.p,{children:["A check list for architecture design is attached here ",(0,n.jsx)(s.a,{href:"https://templeu.instructure.com/courses/106563/files/16928870/download?wrap=1",title:"architecture_design_checklist.pdf",children:"architecture_design_checklist.pdf"}),"\xa0 and should be used as a guidance."]}),"\n",(0,n.jsx)(s.h1,{id:"sequence-diagram",children:"Sequence Diagram"}),"\n",(0,n.jsx)(s.h2,{id:"use-case-5",children:"Use case 5"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"The user wants to level up and/or aim for a specific skill in their skill tree for their character."})}),"\n",(0,n.jsx)(s.mermaid,{value:"sequenceDiagram\n    actor User\n    participant App\n    participant Task\n    participant Character\n    participant SkillTree\n\n    User->>App: Logs into the application\n    App->>User: Shows map\n    User->>Task: Selects a task from the map\n    Task--\x3e>User: Task available\n    User->>Task: Completes task\n    Task->>Character: Task completion data\n    Character--\x3e>App: XP added, check if level up\n    alt Level up reached\n        App--\x3e>User: Character leveled up notification\n    else\n        App--\x3e>User: More tasks needed\n    end\n    User->>SkillTree: Opens skill tree\n    SkillTree--\x3e>User: Displays skill options\n    User->>SkillTree: Chooses new skills\n    SkillTree->>Character: Updates character skills\n    User->>Character: Tests new skill on map"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"1. The user gets into the application and goes to the map to get a task.\n2. User completes the task which goes towards leveling up their character.\n3. Once enough tasks have been completed the character will level up, with some indication to show the user this.\n4. The user goes to the skill tree tied to their character.\n5. User chooses the skills that they want from the tree.\n6. User confirms the skills chosen and after confirmation, the skills are part of the character.\n7. The user tests out one of the new skills on the map/quest\n"})}),"\n",(0,n.jsx)(s.h2,{id:"use-case-6",children:"Use case 6"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"A student tries to complete an assignment but fails in the given time limit."})}),"\n",(0,n.jsx)(s.mermaid,{value:"sequenceDiagram\n    actor User\n    participant App\n    participant Canvas\n    participant Assignment\n    participant Character\n\n    User->>App: Logs into the application\n    App->>User: Displays home screen\n    User->>Canvas: Navigates to Canvas\n    Canvas->>User: Shows assignment list\n    User->>Assignment: Checks on an assignment\n    Assignment--\x3e>User: Assignment due by end of the day\n    User->>Assignment: Accepts the quest/assignment\n    User->>Assignment: Tries to complete it\n    alt Assignment not completed in time\n        Assignment--\x3e>User: Assignment failed\n        App--\x3e>User: Displays failure message\n        App->>Character: Applies penalty (e.g., losing gold)\n    end"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"1. User logs into the app. They go to Canvas.\n2. User goes to the map and checks on an assignment that is due by the end of the day.\n3. The user accepts the quest/assignment and tries to complete it in time.\n4. User fails to complete the assignment in time.\n5. On the application, a message displays to the user that they failed.\n6. A penalty is given to the user\u2019s character due to the failure, such as losing gold.\n"})}),"\n",(0,n.jsx)(s.h2,{id:"use-case-7",children:"Use case 7"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"User wants to trade earned points for merch."})}),"\n",(0,n.jsx)(s.mermaid,{value:"sequenceDiagram\n    actor User\n    participant App\n    participant Rewards\n    participant Prize\n\n    User->>App: Opens account tab\n    App--\x3e>User: Displays account options\n    User->>Rewards: Taps rewards icon\n    Rewards--\x3e>User: Shows available rewards\n    User->>Prize: Taps redeem under a prize\n    alt User has enough points\n        Prize--\x3e>User: Prompt to complete ship information\n    else User does not have enough points\n        Prize--\x3e>User: Notifies insufficient points\n    end"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"1. User wants to redeem points.\n2. Goes to the account tab and taps the rewards icon.\n3. Taps redeem under one of the prizes.\n4. If user has necessary points then user will be prompted to fill out information on where to ship prize.\n"})}),"\n",(0,n.jsx)(s.h2,{id:"use-case-8",children:"Use case 8"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"A student wants to put the new hat they just bought on their character."})}),"\n",(0,n.jsx)(s.mermaid,{value:"sequenceDiagram\n    actor User\n    participant App\n    participant AvatarSystem\n    participant Inventory\n\n    User->>App: Taps on profile\n    App->>User: Shows avatar image\n    User->>App: Presses 'Edit Avatar'\n    App->>AvatarSystem: Opens edit avatar screen\n    AvatarSystem--\x3e>User: Shows edit avatar screen with all items\n    User->>Inventory: Drags hat from inventory to hat slot\n    Inventory--\x3e>AvatarSystem: Updates avatar with new hat\n    User->>App: Clicks 'Save Avatar'\n    App->>AvatarSystem: Saves avatar changes"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"1. User will tap on their profile\n2. User will then be shown an image of their avatar\n3. User then presses \u201cEdit Avatar\u201d\n4. User will be shown an edit avatar screen and all their items\n5. User drags the hat they want from their inventory into the hat slot\n6. User clicks \u201cSave Avatar\u201d\n"})})]})}function h(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},40498:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/ERD-30bc55b80cae8364c51275677368c23f.png"},39407:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/Relational-ecbfc44f1f5ed4fbd5947db432c83a29.webp"},28453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>c});var n=t(96540);const a={},r=n.createContext(a);function i(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);