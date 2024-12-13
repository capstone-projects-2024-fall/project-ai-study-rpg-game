"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[4344],{5018:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>h});var s=n(74848),a=n(28453);const r={sidebar_position:6},i=void 0,o={id:"system-architecture/sequence_diagrams",title:"sequence_diagrams",description:"Sequence Diagram",source:"@site/docs/system-architecture/sequence_diagrams.md",sourceDirName:"system-architecture",slug:"/system-architecture/sequence_diagrams",permalink:"/project-ai-study-rpg-game/docs/system-architecture/sequence_diagrams",draft:!1,unlisted:!1,editUrl:"https://github.com/capstone-projects-2024-fall/project-ai-study-rpg-game/edit/main/documentation/docs/system-architecture/sequence_diagrams.md",tags:[],version:"current",lastUpdatedBy:"Barry Lin",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docsSidebar",previous:{title:"Version Control",permalink:"/project-ai-study-rpg-game/docs/system-architecture/version-control"},next:{title:"Component Descriptions",permalink:"/project-ai-study-rpg-game/docs/system-architecture/componentDescriptions"}},c={},h=[{value:"Sequence Diagram",id:"sequence-diagram",level:2},{value:"Use case 1",id:"use-case-1",level:2},{value:"Use case 2",id:"use-case-2",level:2},{value:"Use case 3",id:"use-case-3",level:2},{value:"Use case 4",id:"use-case-4",level:2},{value:"Use case 5",id:"use-case-5",level:2},{value:"Use case 6",id:"use-case-6",level:2},{value:"Use case 7",id:"use-case-7",level:2},{value:"Use case 8",id:"use-case-8",level:2}];function d(e){const t={code:"code",h2:"h2",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"sequence-diagram",children:"Sequence Diagram"}),"\n",(0,s.jsx)(t.h2,{id:"use-case-1",children:"Use case 1"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"As a user, I want to finish a challenging operating systems lab assignment. (Boss battle)"})}),"\n",(0,s.jsx)(t.mermaid,{value:"sequenceDiagram\n    actor Student\n    Student ->> Web App: Log on to web app\n    activate Web App\n    actor Canvas\n    Web App ->> Canvas: Connect to Canvas\n    Canvas --\x3e> Web App: Connection made\n    Web App --\x3e> Student: Successful login\n    Dashboard--\x3e>Student: Menu displayed\n    activate Dashboard\n    Student ->> Dashboard: Go to map\n    Dashboard ->> Map: Transfer to map\n    deactivate Dashboard\n    activate Map\n    Map --\x3e> Student: Map displayed to student\n    Student ->> Map: Travel Map, find quest giver, quest given\n    actor ChatGPT\n    Map ->> ChatGPT: Retrieve story from gpt\n    ChatGPT --\x3e> Map: Story retrieved \n    Map--\x3e> Student: Story displayed on map\n    Student ->> Map: Navigate map, find boss/assignment\n    Canvas ->> Map: retrieve assignment\n    Map--\x3e> Student: Assignment displayed on map\n    deactivate Map\n    deactivate Web App"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"1. After logging into the app and Canvas, the user clicks on a rpg theme to start.\n2. User is then directed to a map with their avatar to navigate the world \n3. User taps on the quest finder to help reach the npc quest giver .\n4. Users can read the story dialogue made from ChatGPT or choose to skip .\n5. The user then navigates around the map trying to get to the Boss aka the OS lab .\n6. Once the user gets to the boss, a pomodoro timer will be shown and activated.\n"})}),"\n",(0,s.jsx)(t.h2,{id:"use-case-2",children:"Use case 2"}),"\n",(0,s.jsx)(t.p,{children:"**As a user, I want to buy some gear and items for my character. **"}),"\n",(0,s.jsx)(t.mermaid,{value:"sequenceDiagram\n    actor Student\n    Student ->> Dashboard: Successful login\n    activate Dashboard\n    Dashboard--\x3e>Student: Board shown to student\n    Student->> Store: User clicks on store\n    deactivate Dashboard\n    activate Store\n    Store--\x3e> Student: Two options displayed\n    Student->> Item shop: user goes to item shop, buys items\n    activate Item shop\n    Item shop--\x3e Student: Go back to Store.\n    deactivate Item shop\n    Student ->> Character: User goes to character to customize\n    activate Character\n    Character--\x3e> Student: Changes shown\n    deactivate Character\n    deactivate Store"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"1. The user accumulates enough gold to buy the desired items/gear that they want. \n2. User clicks on a button icon on the map to get to the shop.\n3. The user buys the items and gear that they want. Items and gears are based on different themes. \n4. User backs out of the shop and goes to their character through a different button.\n5. They equip what they just bought onto their character.\n6. The changes made are reflected onto the user character, including stats, and on the map. Looking fancy.\n\n"})}),"\n",(0,s.jsx)(t.h2,{id:"use-case-3",children:"Use case 3"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"As a user, I want to start up the application and prepare to start a quest."})}),"\n",(0,s.jsx)(t.mermaid,{value:"sequenceDiagram\n    actor Student\n    Student->>Dashboard: Successful login\n    Dashboard--\x3e> Student: Menu displayed\n    Student->>Assignments: Click on Assignments\n    activate Assignments\n    actor Canvas\n    Assignments->>Canvas: Call to get Assignments\n    Canvas--\x3e>Assignments: Send back assignments and their info\n    Assignments--\x3e>Student: Assignments shown, including class and deadline\n    deactivate Assignments\n    Student->> Character: Customize Characer\n    activate Character\n    Character--\x3e>Student: Changes shown on screen\n    deactivate Character\n    Student->>Map: Go to map and choose theme\n    activate Map\n    Map--\x3e>Student: Theme reflected and show\n    deactivate Map"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"1. The user logs in to the app and connects to Canvas.\n2. They download their assignments from Canvas onto a board to be organized.\n3. The user organizes their assignments based on what they are in order to group them and make it more readable.\n4. The user creates their basic avatar, customizing looks.\n5. Afterwards, a game theme is chosen by the user to reflect the map, quests, and shop items.\n"})}),"\n",(0,s.jsx)(t.h2,{id:"use-case-4",children:"Use case 4"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"As a user, I want to complete a quest and go to the next one."})}),"\n",(0,s.jsx)(t.mermaid,{value:"sequenceDiagram\n    actor Student\n    Student->>Map: Student goes to map to find quest giver.\n    activate Map\n    actor ChatGPT\n    Map->>ChatGPT: Request for story once quest giver is found\n    ChatGPT--\x3e>Map: Story made and given to quest giver\n    Map--\x3e>Student: Quest Giver tells user story involving quest/assignment.\n    Student->>Map: User completes quest\n    Map--\x3e>Student: Minigame shown for user to complete.\n    Student->>Map: Minigame completed\n    Map--\x3e>Student: User allowed to move onto the next quest.\n    deactivate Map"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"1. The user goes to the map.\n2. Using their character, the user finds a quest giver through the quest finder.\n3. A bit of dialogue concerning the story made by the language model.\n4. The user goes to the assignment and completes it within the given time limit.\n5. After an assignment is completed, the user plays a short minigame where they can earn coins before moving onto the next assignment on the map.\n"})}),"\n",(0,s.jsx)(t.h2,{id:"use-case-5",children:"Use case 5"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"The user wants to level up and/or aim for a specific skill in their skill tree for their character."})}),"\n",(0,s.jsx)(t.mermaid,{value:"sequenceDiagram\n    actor User\n    participant App\n    participant Task\n    participant Character\n    participant SkillTree\n\n    User->>App: Logs into the application\n    App->>User: Shows map\n    User->>Task: Selects a task from the map\n    Task--\x3e>User: Task available\n    User->>Task: Completes task\n    Task->>Character: Task completion data\n    Character--\x3e>App: XP added, check if level up\n    alt Level up reached\n        App--\x3e>User: Character leveled up notification\n    else\n        App--\x3e>User: More tasks needed\n    end\n    User->>SkillTree: Opens skill tree\n    SkillTree--\x3e>User: Displays skill options\n    User->>SkillTree: Chooses new skills\n    SkillTree->>Character: Updates character skills\n    User->>Character: Tests new skill on map"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"1. The user gets into the application and goes to the map to get a task.\n2. User completes the task which goes towards leveling up their character.\n3. Once enough tasks have been completed the character will level up, with some indication to show the user this.\n4. The user goes to the skill tree tied to their character.\n5. User chooses the skills that they want from the tree.\n6. User confirms the skills chosen and after confirmation, the skills are part of the character.\n7. The user tests out one of the new skills on the map/quest\n"})}),"\n",(0,s.jsx)(t.h2,{id:"use-case-6",children:"Use case 6"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"A student tries to complete an assignment but fails in the given time limit."})}),"\n",(0,s.jsx)(t.mermaid,{value:"sequenceDiagram\n    actor User\n    participant App\n    participant Canvas\n    participant Assignment\n    participant Character\n\n    User->>App: Logs into the application\n    App->>User: Displays home screen\n    User->>Canvas: Navigates to Canvas\n    Canvas->>User: Shows assignment list\n    User->>Assignment: Checks on an assignment\n    Assignment--\x3e>User: Assignment due by end of the day\n    User->>Assignment: Accepts the quest/assignment\n    User->>Assignment: Tries to complete it\n    alt Assignment not completed in time\n        Assignment--\x3e>User: Assignment failed\n        App--\x3e>User: Displays failure message\n        App->>Character: Applies penalty (e.g., losing gold)\n    end"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"1. User logs into the app. They go to Canvas.\n2. User goes to the map and checks on an assignment that is due by the end of the day.\n3. The user accepts the quest/assignment and tries to complete it in time.\n4. User fails to complete the assignment in time.\n5. On the application, a message displays to the user that they failed.\n6. A penalty is given to the user\u2019s character due to the failure, such as losing gold.\n"})}),"\n",(0,s.jsx)(t.h2,{id:"use-case-7",children:"Use case 7"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"User wants to trade earned points for merch."})}),"\n",(0,s.jsx)(t.mermaid,{value:"sequenceDiagram\n    actor User\n    participant App\n    participant Rewards\n    participant Prize\n\n    User->>App: Opens account tab\n    App--\x3e>User: Displays account options\n    User->>Rewards: Taps rewards icon\n    Rewards--\x3e>User: Shows available rewards\n    User->>Prize: Taps redeem under a prize\n    alt User has enough points\n        Prize--\x3e>User: Prompt to complete ship information\n    else User does not have enough points\n        Prize--\x3e>User: Notifies insufficient points\n    end"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"1. User wants to redeem points.\n2. Goes to the account tab and taps the rewards icon.\n3. Taps redeem under one of the prizes.\n4. If user has necessary points then user will be prompted to fill out information on where to ship prize.\n"})}),"\n",(0,s.jsx)(t.h2,{id:"use-case-8",children:"Use case 8"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"A student wants to put the new hat they just bought on their character."})}),"\n",(0,s.jsx)(t.mermaid,{value:"sequenceDiagram\n    actor User\n    participant App\n    participant AvatarSystem\n    participant Inventory\n\n    User->>App: Taps on profile\n    App->>User: Shows avatar image\n    User->>App: Presses 'Edit Avatar'\n    App->>AvatarSystem: Opens edit avatar screen\n    AvatarSystem--\x3e>User: Shows edit avatar screen with all items\n    User->>Inventory: Drags hat from inventory to hat slot\n    Inventory--\x3e>AvatarSystem: Updates avatar with new hat\n    User->>App: Clicks 'Save Avatar'\n    App->>AvatarSystem: Saves avatar changes"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"1. User will tap on their profile\n2. User will then be shown an image of their avatar\n3. User then presses \u201cEdit Avatar\u201d\n4. User will be shown an edit avatar screen and all their items\n5. User drags the hat they want from their inventory into the hat slot\n6. User clicks \u201cSave Avatar\u201d\n"})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var s=n(96540);const a={},r=s.createContext(a);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);