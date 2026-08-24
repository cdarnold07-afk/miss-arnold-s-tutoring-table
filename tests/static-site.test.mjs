import assert from "node:assert/strict";
import {existsSync, readFileSync} from "node:fs";
import test from "node:test";

const routes=["about","approach","contact","faq","locations","payment","preassessment","pricing","resources","schedule","services","student-hub"];

test("exports the homepage and every public route",()=>{
  assert.ok(existsSync("out/index.html"));
  for(const route of routes) assert.ok(existsSync(`out/${route}/index.html`),`missing ${route}`);
});

test("uses production social images instead of localhost",()=>{
  const html=readFileSync("out/index.html","utf8");
  assert.doesNotMatch(html,/localhost:3000/);
  assert.match(html,/cdarnold07-afk\.github\.io\/miss-arnold-s-tutoring-table\/og\.png/);
});

test("contains the working service links",()=>{
  const all=routes.map(route=>readFileSync(`out/${route}/index.html`,"utf8")).join("\n");
  for(const required of ["square.link/u/K6jriBfx","calendar.app.google/7REHjA7DQgKz125U7","forms.gle/VFpgxmQ2D4VJQq3Q9","forms.gle/HovmKuZBTo696V9R7","maps.apple.com","google.com/maps/dir"]) assert.match(all,new RegExp(required.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")));
});

test("does not publish nonfunctional forms",()=>{
  const html=readFileSync("out/index.html","utf8")+routes.map(route=>readFileSync(`out/${route}/index.html`,"utf8")).join("\n");
  assert.doesNotMatch(html,/<form\b/i);
});
