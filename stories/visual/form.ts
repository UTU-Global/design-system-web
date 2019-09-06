import { TemplateResult, html } from "lit-html";

export const form = (): TemplateResult => html`
  <div id="wrapper">
      <h2>Form only</h2>
      <form action="#">
      <fieldset>
        <legend>Form legend</legend>
        <div>
          <label for="f0">Text input with placeholder:</label>
          <input type="text" id="f0" placeholder="Text here">
        </div>
        <div>
          <label for="dis">Disabled text input:</label>
          <input type="text" id="dis" value="some content" disabled>
        </div>
        <div class="inline">
          <label for="f1">Text input:</label>
          <div class="elements">
            <input type="text" id="f1" value="Some random text" placeholder="Text here">
            <utu-button>Test</utu-button>
          </div>
        </div>
        <div>
          <label for="em">Email:</label>
          <input type="email" id="em" placeholder="someone@utu.global">
        </div>
        <div>
          <label for="pw">Password input:</label>
          <input type="password" id="pw" value="password">
        </div>
        <div>
          <label for="f2">Radio input:</label>
          <input type="radio" id="f2">
        </div>
        <div>
          <label for="f3">Checkbox input:</label>
          <input type="checkbox" id="f3">
        </div>
        <div>
          <label for="f4">Select field:</label>
          <select id="f4">
            <option>
              Option 01
            </option>
            <option>
              Option 02
            </option>
          </select>
        </div>
        <div>
          <label for="f5">Textarea:</label>
          <textarea id="f5" cols="30" rows="5">Textarea text</textarea>
        </div>
        <div>
          <label for="f6">Input Button:</label>
          <input type="button" id="f6" value="button text">
        </div>
        <div>
          <label>Button Elements: <span class="small quiet">Can use &lt;button&gt; tag or &lt;a class="button"&gt;</span></label>
          <button class="button positive"><img src="https://raw.githubusercontent.com/ericrasch/html-kitchen-sink/master/web/assets/img/icons/tick.png" alt=""> Save</button> <a class="button" href="#"><img src="https://raw.githubusercontent.com/ericrasch/html-kitchen-sink/master/web/assets/img/icons/key.png" alt=""> Change Password</a> <a href="#" class="button negative"><img src="https://raw.githubusercontent.com/ericrasch/html-kitchen-sink/master/web/assets/img/icons/cross.png" alt=""> Cancel</a>
        </div>
      </fieldset>
    </form>
  </div>
`;