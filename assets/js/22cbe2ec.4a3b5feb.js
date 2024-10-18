"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[397],{30429:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var t=n(74848),i=n(28453);const r={sidebar_position:1},o="Backend unit tests",c={id:"testing/backend-unit-testing",title:"Backend unit tests",description:"Overview",source:"@site/docs/testing/backend-unit-testing.md",sourceDirName:"testing",slug:"/testing/backend-unit-testing",permalink:"/project-ai-study-rpg-game/docs/testing/backend-unit-testing",draft:!1,unlisted:!1,editUrl:"https://github.com/capstone-projects-2024-fall/project-ai-study-rpg-game/edit/main/documentation/docs/testing/backend-unit-testing.md",tags:[],version:"current",lastUpdatedBy:"IskraLlupa25",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Test Procedures",permalink:"/project-ai-study-rpg-game/docs/category/test-procedures"},next:{title:"Frontend unit tests",permalink:"/project-ai-study-rpg-game/docs/testing/frontend-unit-testing"}},a={},d=[{value:"Overview",id:"overview",level:3},{value:"General Testing Guidelines",id:"general-testing-guidelines",level:3},{value:"SignUp/Login Tests",id:"signuplogin-tests",level:3}];function l(e){const s={code:"code",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"backend-unit-tests",children:"Backend unit tests"}),"\n",(0,t.jsx)(s.h3,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(s.p,{children:"This section outlines the unit tests for backend functionalities to ensure API endpoints, services, and database operations are working as expected. The tests focus on the following areas:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"API Endpoints:"})," Validating requests and responses."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Database Operations:"})," Ensuring CRUD operations execute correctly."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Service Logic:"})," Verifying that services handle business logic as expected."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Error Handling:"})," Testing that appropriate errors are returned for edge cases."]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"general-testing-guidelines",children:"General Testing Guidelines"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Mocking External Services:"})," Use mocks for external API calls (e.g., Canvas API) to simulate responses."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Test Database:"})," Use an in-memory database (SQLite) to run tests without affecting production data."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Coverage Requirements:"})," Aim for 90%+ coverage of key backend functions."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Input Validation:"})," Verify that invalid inputs are properly handled with appropriate error responses."]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"signuplogin-tests",children:"SignUp/Login Tests"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"test_signup()"})}),":"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Tests the ",(0,t.jsx)(s.code,{children:"/signup"})," endpoint by registering a new user with valid details."]}),"\n",(0,t.jsxs)(s.li,{children:["Verifies that a successful signup returns a ",(0,t.jsx)(s.strong,{children:"201"})," status code and the message ",(0,t.jsx)(s.code,{children:"'User registered successfully'"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Checks for proper handling of duplicate signups by reattempting to register the same user, expecting a ",(0,t.jsx)(s.strong,{children:"400"})," status code and the message ",(0,t.jsx)(s.code,{children:"'User already exists'"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"test_login()"})}),":"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"First, registers a user to enable testing of login functionality."}),"\n",(0,t.jsxs)(s.li,{children:["Validates that logging in with correct credentials returns a ",(0,t.jsx)(s.strong,{children:"200"})," status code and the message ",(0,t.jsx)(s.code,{children:"'Login successful'"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Ensures that incorrect login attempts (e.g., with an invalid password) return a ",(0,t.jsx)(s.strong,{children:"401"})," status code and the message ",(0,t.jsx)(s.code,{children:"'Invalid credentials'"}),"."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"For each method, one or more test cases."}),"\n",(0,t.jsx)(s.p,{children:"A test case consists of input parameter values and expected results."}),"\n",(0,t.jsx)(s.p,{children:"All external classes should be stubbed using mock objects."})]})}function u(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>c});var t=n(96540);const i={},r=t.createContext(i);function o(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);