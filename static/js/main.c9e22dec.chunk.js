(this.webpackJsonpchalmers_vision_frontend=this.webpackJsonpchalmers_vision_frontend||[]).push([[0],{16:function(e,t,n){},19:function(e,t,n){},29:function(e,t,n){e.exports=n(42)},34:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(24),s=n.n(o),c=n(13),i=n(11),l=(n(34),n(1)),u=n.n(l),p=n(2),m=n(4),f=n(5),d=n(7),h=n(6),b=(n(16),n(28)),v=(n(19),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;Object(m.a)(this,n),(a=t.call(this,e))._radioButtons=[],a.getAnswer=function(){return a.state.answer},a.renderMultipleChoice=function(){var e=[];return a.props.choices.forEach((function(t,n){"string"===typeof t&&e.push(r.a.createElement("div",{className:"question-div"},r.a.createElement("input",{ref:function(e){return a._radioButtons.push(e)},type:"radio",value:t,onChange:a.onRadioButtonSelect,key:n,className:"radiobutton"}),r.a.createElement("label",{className:"inputfield text"},t)))})),e},a.renderInputField=function(){return r.a.createElement("input",{type:a.state.type,onChange:a.onTextFieldChange,className:"inputfield"})},a.onRadioButtonSelect=function(e){a._radioButtons.forEach((function(t){t!==e.target&&null!=t&&(t.checked=!1)}));var t={qID:a.props.qID,response:e.target.value};a.setState({answer:t})},a.onTextFieldChange=function(e){var t={qID:a.props.qID,response:e.target.value};a.setState({answer:t})};var o="";switch(a.props.response_type){case"integer":o="number";break;case"date":o="date";break;default:o="string"}var s={qID:a.props.qID,response:"unanswered"};return a.state={answer:s,type:o},a}return Object(f.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:this.props.className},r.a.createElement("h4",{className:"text title"},this.props.title),this.props.multipleChoice?this.renderMultipleChoice():this.renderInputField(),r.a.createElement("div",{className:"children"},"unanswered"===this.state.answer.response?r.a.createElement("div",null):this.props.children))}}]),n}(r.a.Component));v.defaultProps={choices:[],className:"",controlQID:-1,response_type:"string"};var E=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e))._questions=[],a.findControlQuestion=function(e){var t={};return a.props.questionData.forEach((function(n){n.qid===e&&(t=n)})),t},a.buildForm=function(){var e=[];return a.props.questionData.forEach((function(t,n){if(-1!==t.control_qid){var o=a.findControlQuestion(t.control_qid);e.push(r.a.createElement(v,{title:t.question,qID:t.qid,multipleChoice:t.multiple_choice,choices:t.list_field,controlQID:t.control_qid,key:n,ref:function(e){return a._questions.push(e)}},r.a.createElement(v,{title:o.question,qID:o.qid,multipleChoice:o.multiple_choice,choices:o.list_field,ref:function(e){return a._questions.push(e)}})))}else e.push(r.a.createElement(v,{title:t.question,qID:t.qid,multipleChoice:t.multiple_choice,choices:t.list_field,key:n,ref:function(e){return a._questions.push(e)},response_type:t.response_type}))})),e},a.getAnswers=function(){var e=[];return a._questions.forEach((function(t){e.push(t.getAnswer())})),e},a.state={answers:{}},a}return Object(f.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:this.props.className},r.a.createElement("h2",{className:"text"},this.props.title),this.buildForm())}}]),n}(a.Component);E.defaultProps={className:"",title:""};var g=function(){function e(){Object(m.a)(this,e)}return Object(f.a)(e,null,[{key:"get",value:function(){var e=Object(p.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:return a=e.sent,e.abrupt("return",a);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()},{key:"postJSON",value:function(){var e=Object(p.a)(u.a.mark((function e(t,n){var a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,(a=new Headers).append("Content-Type","application/json"),e.next=5,fetch(t,{headers:a,method:"POST",body:JSON.stringify(n)});case 5:return r=e.sent,e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}()},{key:"postFile",value:function(){var e=Object(p.a)(u.a.mark((function e(t,n){var a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,(a=new Headers).append("Content-Type","application/xml"),e.next=5,fetch(t,{headers:a,method:"POST",body:n});case 5:return r=e.sent,e.next=8,r.json();case 8:return e.abrupt("return",e.sent);case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n){return e.apply(this,arguments)}}()},{key:"patchFile",value:function(){var e=Object(p.a)(u.a.mark((function e(t,n){var a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,(a=new Headers).append("Content-Type","application/xml"),e.next=5,fetch(t,{headers:a,method:"PATCH",body:n});case 5:return r=e.sent,e.next=8,r.json();case 8:return e.abrupt("return",e.sent);case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n){return e.apply(this,arguments)}}()}]),e}(),D={SERVER_URL:"http://csc302-api.eastus2.cloudapp.azure.com:8000/api/v1",URLS:{"Fill Form":"/","View Patient Forms":"/filledforms","Upload Form":"/formupload"}},x=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e))._formJSX=[],a._formRefs=[],a.componentWillMount=function(){var e=a.props.formData.body;console.log(a.props.formData),e.questions.length>0&&a._formJSX.push(r.a.createElement(E,{title:e.title,questionData:e.questions,ref:function(e){return a._formRefs.push(e)}})),e.sections.forEach((function(e){a.generateForm(e)})),a.setState({title:a.props.formData.title})},a.answers=function(){var e=[];a._formRefs.forEach((function(t){e.push.apply(e,Object(b.a)(t.getAnswers()))}));var t={};return t.children=e,t.form_id=a.props.formData.id.toString(),t.patient_id=a.state.patientID,t.created_ts=(new Date).getTime(),t.form_title=a.state.title,t.version=a.props.formData.body.version,t},a.submitFormHandler=function(){var e=Object(p.a)(u.a.mark((function e(t){var n,r,o,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""!==a.state.patientID){e.next=3;break}return e.abrupt("return");case 3:return n="".concat(D.SERVER_URL,"/response/"),r=a.answers(),e.next=7,g.postJSON(n,r);case 7:if(200===(o=e.sent).status){e.next=12;break}alert("Form not submitted"),e.next=16;break;case 12:return e.next=14,o.json();case 14:s=e.sent,alert("Successfully submitted form. The response ID is ".concat(s.data.response_id,"."));case 16:window.location.reload(!0);case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.generateForm=function(e){a._formJSX.push(r.a.createElement(E,{title:e.title,questionData:e.questions,ref:function(e){return a._formRefs.push(e)}})),e.sections.length>0&&e.sections.forEach((function(e){a.generateForm(e)}))},a.patientIDHandler=function(e){a.setState({patientID:e.target.value})},a.state={title:"",patientID:""},a}return Object(f.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.submitFormHandler},r.a.createElement("h1",{className:"text"},this.state.title),r.a.createElement("label",{className:"text"},"Patient ID"),r.a.createElement("input",{type:"text",onChange:this.patientIDHandler,required:!0}),this._formJSX,r.a.createElement("button",{type:"submit",className:"btn btn-light submit-button"},"Submit")))}}]),n}(a.Component),w=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).form=[],a.handleFormIDInput=function(e){a.setState({formID:e.target.value})},a.showForm=function(){return null!==a.state.formData?r.a.createElement("div",{className:"col-lg-12"},r.a.createElement(x,{formData:a.state.formData})):r.a.createElement("div",null)},a.getFormButtonHandler=Object(p.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(-1!==a.state.formID){e.next=3;break}return alert("Please enter a form ID."),e.abrupt("return");case 3:return t="".concat(D.SERVER_URL,"/xmlform/").concat(a.state.formID),e.next=6,g.get(t);case 6:if(!(n=e.sent).message){e.next=10;break}return alert("Invalid form ID."),e.abrupt("return");case 10:a.setState({formData:n});case 11:case"end":return e.stop()}}),e)}))),a.showFormIDInput=function(){return null===a.state.formData?r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("h3",{className:"text"},"Enter Form ID"),r.a.createElement("input",{className:"form-text-input",placeholder:"Form ID",onChange:a.handleFormIDInput}),r.a.createElement("br",null),r.a.createElement("button",{onClick:a.getFormButtonHandler,className:"btn btn-light form-button-responses"},"Get Form")):r.a.createElement("div",null)},a.handleNavigationButtons=function(e){var t=D.URLS[e];a.setState({redirectURL:t})},a.state={formData:null,formID:-1,redirectURL:""},a}return Object(f.a)(n,[{key:"render",value:function(){var e=this;return""!==this.state.redirectURL?r.a.createElement(i.a,{push:!0,to:"".concat(this.state.redirectURL)}):r.a.createElement("div",{className:"container-fluid bg-dark App-background"},r.a.createElement("div",{className:"jumbotron bg-light jumbotron-style"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-offset-2 col-xs-8"},r.a.createElement("h1",{className:"jumbotron-text"},"SDCTools"),r.a.createElement("button",{className:"navigation-button btn btn-secondary",onClick:function(){return window.location.reload(!0)}},"Fill Form"),r.a.createElement("button",{className:"navigation-button btn btn-secondary",onClick:function(){return e.handleNavigationButtons("View Patient Forms")}},"View Patient Forms"),r.a.createElement("button",{className:"navigation-button btn btn-secondary",onClick:function(){return e.handleNavigationButtons("Upload Form")}},"Upload Form")))),r.a.createElement("div",{className:"row"},this.showFormIDInput(),this.showForm()))}}]),n}(r.a.Component),I=n(27),y=function(){function e(){Object(m.a)(this,e)}return Object(f.a)(e,null,[{key:"qidToQuestionMapping",value:function(){var e=Object(p.a)(u.a.mark((function e(t){var n,a,r,o,s=this;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getForm(t);case 2:for(o in n=e.sent,a=n.body,r={},a.questions)r[o.qid]=o.question;return a.sections.forEach((function(e){Object.assign(r,s.sectionMapper(e))})),e.abrupt("return",r);case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"sectionMapper",value:function(e){var t=this,n={};if(e)return e.questions.forEach((function(e){n[e.qid]=e.question})),e.sections.length>0&&e.sections.forEach((function(e){Object.assign(n,t.sectionMapper(e))})),n}},{key:"getForm",value:function(){var e=Object(p.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n="".concat(D.SERVER_URL,"/xmlform/").concat(t),e.next=4,g.get(n);case 4:return a=e.sent,e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()}]),e}(),N=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).renderResponses=function(){var e=a.props.formResponse.children,t=[];return e.forEach((function(e,n){var o=e.qID;t.push(r.a.createElement("p",{className:"text response-text",key:n},r.a.createElement("div",{className:"response-key"},"".concat(a.props.questionMapping[o]))," ".concat(e.response)))})),t.push(r.a.createElement("br",null)),t},a.copyToClipboard=function(e){var t=document.createElement("textarea");t.style.position="fixed",t.style.left="0",t.style.top="0",t.style.opacity="0",t.value=e,document.body.appendChild(t),t.focus(),t.select(),document.execCommand("copy"),document.body.removeChild(t)},a.getPersistentLink=function(){var e=Object(p.a)(u.a.mark((function e(t){var n,r,o,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n="".concat(D.SERVER_URL,"/persistent_response/"),e.next=4,g.postJSON(n,a.props.formResponse);case 4:if(200===(r=e.sent).status){e.next=9;break}alert("Persistent link could not be fetched"),e.next=15;break;case 9:return e.next=11,r.json();case 11:o=e.sent,s="".concat(D.SERVER_URL,"/persistent_response/")+"?persistent_id="+o.data.persistent_id,a.copyToClipboard(s),alert("Copied persistent link to clipboard. The persistence ID is ".concat(o.data.persistent_id,"."));case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={},a}return Object(f.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",{className:"text response-title"},"Form Title: ".concat(this.props.formResponse.form_title)),r.a.createElement("p",{className:"text response-title"},"Response ID: ".concat(this.props.formResponse.response_id)),r.a.createElement("p",{className:"text response-title"},"Patient ID: ".concat(this.props.formResponse.patient_id)),r.a.createElement("button",{type:"submit",className:"btn btn-light submit-button",onClick:this.getPersistentLink}," Share "),this.renderResponses())}}]),n}(a.Component),k=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e))._responses=[],a.handleInput=function(e,t){switch(t){case"patientID":a.setState({patientID:e.target.value});break;case"formID":a.setState({formID:e.target.value});break;case"responseID":a.setState({responseID:e.target.value})}},a.showForm=Object(p.a)(u.a.mark((function e(){var t,n,o,s,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===a.state.formData){e.next=23;break}if(0!==(t=a.state.formData.data.responses).length){e.next=4;break}return e.abrupt("return",r.a.createElement("text",{className:"text"},"No Responses"));case 4:o=Object(I.a)(t),e.prev=5,o.s();case 7:if((s=o.n()).done){e.next=15;break}return n=s.value,e.next=11,y.qidToQuestionMapping(n.form_id).then();case 11:c=e.sent,a._responses.push(r.a.createElement(N,{formResponse:n,questionMapping:c}));case 13:e.next=7;break;case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(5),o.e(e.t0);case 20:return e.prev=20,o.f(),e.finish(20);case 23:case"end":return e.stop()}}),e,null,[[5,17,20,23]])}))),a.handleNavigationButtons=function(e){var t=D.URLS[e];a.setState({redirectURL:t})},a.getFormButtonHandler=Object(p.a)(u.a.mark((function e(){var t,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==a.state.formID||""!==a.state.patientID||""!==a.state.responseID){e.next=3;break}return alert("Please enter a response ID or use the search option."),e.abrupt("return");case 3:return t="".concat(D.SERVER_URL,"/response/?"),n=a.queryStringBuilder(),t+=n,e.next=8,g.get(t);case 8:if("No responses found!"!==(r=e.sent).message){e.next=13;break}return alert("No responses found with the specified parameters."),window.location.reload(!0),e.abrupt("return");case 13:a.setState({formData:r}),a.showForm().then((function(){return a.setState({responseLoaded:!0})}));case 15:case"end":return e.stop()}}),e)}))),a.queryStringBuilder=function(){var e="";return""!==a.state.responseID?e="response_id=".concat(a.state.responseID):(""!==a.state.formID&&""!==a.state.patientID?e="patient_id=".concat(a.state.patientID,"&form_id=").concat(a.state.formID):""!==a.state.formID?e="form_id=".concat(a.state.formID):""!==a.state.patientID&&(e="patient_id=".concat(a.state.patientID)),e)},a.showFormIDInput=function(){return null===a.state.formData?r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("h2",{className:"text"},"Response Searcher"),r.a.createElement("label",{className:"text"},"Enter the Response ID"),r.a.createElement("br",null),r.a.createElement("input",{className:"form-text-input response-id-input",onChange:function(e){return a.handleInput(e,"responseID")},placeholder:"Response ID"}),r.a.createElement("br",null),r.a.createElement("h1",{className:"text"},"OR"),r.a.createElement("label",{className:"text"},"Search by Patient ID and Form ID"),r.a.createElement("br",null),r.a.createElement("input",{className:"form-text-input",onChange:function(e){return a.handleInput(e,"patientID")},placeholder:"Patient ID"}),r.a.createElement("input",{className:"form-text-input",onChange:function(e){return a.handleInput(e,"formID")},placeholder:"Form ID"}),r.a.createElement("br",null),r.a.createElement("button",{onClick:a.getFormButtonHandler,className:"btn btn-light form-button-responses"},"Get Responses")):r.a.createElement("div",null)},a.state={formData:null,formID:"",patientID:"",responseID:"",redirectURL:"",responseLoaded:!1},a}return Object(f.a)(n,[{key:"render",value:function(){var e=this;return""!==this.state.redirectURL?r.a.createElement(i.a,{push:!0,to:"".concat(this.state.redirectURL)}):r.a.createElement("div",{className:"container-fluid bg-dark App-background"},r.a.createElement("div",{className:"jumbotron bg-light jumbotron-style"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-offset-2 col-xs-8"},r.a.createElement("h1",{className:"jumbotron-text"},"SDCTools"),r.a.createElement("button",{className:"navigation-button btn btn-secondary",onClick:function(){return e.handleNavigationButtons("Fill Form")}},"Fill Form"),r.a.createElement("button",{className:"navigation-button btn btn-secondary",onClick:function(){return window.location.reload(!0)}},"View Patient Forms"),r.a.createElement("button",{className:"navigation-button btn btn-secondary",onClick:function(){return e.handleNavigationButtons("Upload Form")}},"Upload Form")))),r.a.createElement("div",{className:"row"},this.showFormIDInput(),this.state.responseLoaded?this._responses:r.a.createElement("div",null)))}}]),n}(r.a.Component),_=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).form=[],a.fileInput=void 0,a.handleNavigationButtons=function(e){var t=D.URLS[e];a.setState({redirectURL:t})},a.handleUpload=function(){var e=Object(p.a)(u.a.mark((function e(t){var n,r,o,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n="".concat(D.SERVER_URL,"/new_xml/"),r=a.fileInput.current.files[0]){e.next=7;break}return alert("Please choose a file to upload."),e.abrupt("return");case 7:if("new"!==t){e.next=14;break}return e.next=10,g.postFile(n,r);case 10:(o=e.sent)&&o.id?alert("Successfully added new form. New form ID is ".concat(o.id,".")):o&&o.message?alert('This form is already in the database. If you would like to update it, please use the "Update Existing" option.'):alert("Unable to upload form."),e.next=19;break;case 14:if("update"!==t){e.next=19;break}return e.next=17,g.patchFile(n,r);case 17:(s=e.sent)?alert("Successfully updated form ".concat(s.id,".")):alert("Unable to upload form.");case 19:window.location.reload(!0);case 20:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={formData:null,formID:-1,redirectURL:""},a.fileInput=r.a.createRef(),a}return Object(f.a)(n,[{key:"render",value:function(){var e=this;return""!==this.state.redirectURL?r.a.createElement(i.a,{push:!0,to:"".concat(this.state.redirectURL)}):r.a.createElement("div",{className:"container-fluid bg-dark App-background"},r.a.createElement("div",{className:"jumbotron bg-light jumbotron-style"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-offset-2 col-xs-8"},r.a.createElement("h1",{className:"jumbotron-text"},"SDCTools"),r.a.createElement("button",{className:"navigation-button btn btn-secondary",onClick:function(){return e.handleNavigationButtons("Fill Form")}},"Fill Form"),r.a.createElement("button",{className:"navigation-button btn btn-secondary",onClick:function(){return e.handleNavigationButtons("View Patient Forms")}},"View Patient Forms"),r.a.createElement("button",{className:"navigation-button btn btn-secondary",onClick:function(){return window.location.reload(!0)}},"Upload Form")))),r.a.createElement("div",{className:"row"},r.a.createElement("form",null,r.a.createElement("input",{required:!0,className:"file-input",accept:".xml",type:"file",ref:this.fileInput}),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){return e.handleUpload("new")},className:"file-upload-submit-btn btn btn-light",type:"button"},"Add New"),r.a.createElement("button",{onClick:function(){return e.handleUpload("update")},className:"file-upload-submit-btn btn btn-success",type:"button"},"Update Existing"))))}}]),n}(r.a.Component);n(41),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var j=r.a.createElement(c.a,null,r.a.createElement("div",null,r.a.createElement(i.b,{exact:!0,path:"/",component:w}),r.a.createElement(i.b,{exact:!0,path:"/filledforms",component:k}),r.a.createElement(i.b,{exact:!0,path:"/formupload",component:_})));s.a.render(j,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[29,1,2]]]);
//# sourceMappingURL=main.c9e22dec.chunk.js.map