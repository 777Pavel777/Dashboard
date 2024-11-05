(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function e(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(n){if(n.ep)return;n.ep=!0;const o=e(n);fetch(n.href,o)}})();function p(){const a=document.querySelector(".header__mobile"),t=document.querySelector(".header__nav"),e=document.querySelector(".user");window.innerWidth<768?(a.classList.remove("visually-hidden"),t.classList.add("visually-hidden"),e.classList.add("visually-hidden")):(t.classList.remove("visually-hidden"),e.classList.remove("visually-hidden"),a.classList.add("visually-hidden"))}p();window.addEventListener("resize",p);const y=[{name:"Jane Cooper",company:"Microsoft",phone:"(225) 555-0118",email:"jane@microsoft.com",country:"United States",status:"Active"},{name:"Floyd Miles",company:"Yahoo",phone:"(205) 555-0100",email:"floyd@yahoo.com",country:"Kiribati",status:"Inactive"},{name:"Ronald Richards",company:"Adobe",phone:"(302) 555-0107",email:"ronald@adobe.com",country:"Israel",status:"Inactive"},{name:"Marvin McKinney",company:"Tesla",phone:"(252) 555-0126",email:"marvin@tesla.com",country:"Iran",status:"Active"},{name:"Jerome Bell",company:"Google",phone:"(629) 555-0129",email:"jerome@google.com",country:"Réunion",status:"Active"},{name:"Kathryn Murphy",company:"Microsoft",phone:"(408) 555-0120",email:"kathryn@microsoft.com",country:"Curaçao",status:"Active"},{name:"Jacob Jones",company:"Yahoo",phone:"(208) 555-0112",email:"jacob@yahoo.com",country:"Brazil",status:"Active"},{name:"Kristin Watson",company:"Facebook",phone:"(704) 555-0127",email:"kristin@facebook.com",country:"Åland Islands",status:"Inactive"},{name:"John Doe",company:"Amazon",phone:"(301) 555-0145",email:"john@amazon.com",country:"Canada",status:"Active"},{name:"Alice Johnson",company:"Apple",phone:"(321) 555-0144",email:"alice@apple.com",country:"United Kingdom",status:"Inactive"},{name:"Michael Brown",company:"Netflix",phone:"(401) 555-0143",email:"michael@netflix.com",country:"Australia",status:"Active"},{name:"Jessica Lee",company:"Spotify",phone:"(451) 555-0142",email:"jessica@spotify.com",country:"Germany",status:"Inactive"},{name:"Tom Smith",company:"IBM",phone:"(501) 555-0141",email:"tom@ibm.com",country:"France",status:"Active"},{name:"Linda Davis",company:"Microsoft",phone:"(551) 555-0140",email:"linda@microsoft.com",country:"Japan",status:"Inactive"},{name:"James Wilson",company:"Google",phone:"(601) 555-0139",email:"james@google.com",country:"South Korea",status:"Active"},{name:"Patricia Taylor",company:"Facebook",phone:"(651) 555-0138",email:"patricia@facebook.com",country:"Italy",status:"Active"},{name:"Robert Moore",company:"Tesla",phone:"(701) 555-0137",email:"robert@tesla.com",country:"Netherlands",status:"Inactive"},{name:"Susan Anderson",company:"Twitter",phone:"(751) 555-0136",email:"susan@twitter.com",country:"Mexico",status:"Active"},{name:"Charles Thomas",company:"LinkedIn",phone:"(801) 555-0135",email:"charles@linkedin.com",country:"Switzerland",status:"Inactive"},{name:"Barbara Jackson",company:"Amazon",phone:"(851) 555-0134",email:"barbara@amazon.com",country:"China",status:"Active"},{name:"Daniel Martinez",company:"Microsoft",phone:"(901) 555-0133",email:"daniel@microsoft.com",country:"India",status:"Inactive"},{name:"Matthew Robinson",company:"Adobe",phone:"(951) 555-0132",email:"matthew@adobe.com",country:"Brazil",status:"Active"},{name:"Nancy Clark",company:"Tesla",phone:"(302) 555-0131",email:"nancy@tesla.com",country:"United States",status:"Active"},{name:"Steven Rodriguez",company:"Google",phone:"(305) 555-0130",email:"steven@google.com",country:"Spain",status:"Inactive"},{name:"Karen Lewis",company:"Yahoo",phone:"(307) 555-0129",email:"karen@yahoo.com",country:"Argentina",status:"Active"},{name:"Paul Walker",company:"Facebook",phone:"(408) 555-0128",email:"paul@facebook.com",country:"Sweden",status:"Inactive"},{name:"Edward Young",company:"Netflix",phone:"(409) 555-0127",email:"edward@netflix.com",country:"Norway",status:"Active"},{name:"Dorothy King",company:"IBM",phone:"(510) 555-0126",email:"dorothy@ibm.com",country:"Denmark",status:"Active"},{name:"Chris Wright",company:"Spotify",phone:"(511) 555-0125",email:"chris@spotify.com",country:"South Africa",status:"Inactive"},{name:"Elizabeth Hill",company:"Twitter",phone:"(512) 555-0124",email:"elizabeth@twitter.com",country:"New Zealand",status:"Active"},{name:"Anthony Scott",company:"LinkedIn",phone:"(513) 555-0123",email:"anthony@linkedin.com",country:"Singapore",status:"Inactive"},{name:"George Green",company:"Apple",phone:"(514) 555-0122",email:"george@apple.com",country:"Ireland",status:"Active"},{name:"Helen Adams",company:"Microsoft",phone:"(515) 555-0121",email:"helen@microsoft.com",country:"United Arab Emirates",status:"Inactive"}],m=document.querySelector(".content__table-info"),u=document.querySelector(".content__table-wrapper"),c=document.querySelector(".content__list");document.querySelector("#searchInput");const d=document.querySelector(".pagination"),h=8;let l=1;function v(a,t,e){const i=(t-1)*e,n=i+e;return a.slice(i,n)}function f(){const a=Math.ceil(y.length/h);d.innerHTML="";for(let t=1;t<=a;t++){const e=document.createElement("button");e.textContent=t,e.onclick=()=>b(t),t===l&&(e.disabled=!0),d.appendChild(e)}}function r(){m.innerHTML="";const a=v(y,l,h);if(window.innerWidth<768){u.classList.add("visually-hidden"),c.classList.remove("visually-hidden");const t=a.map(e=>{const i=e.status==="Active"?"active":"inactive";return`
        <li class="content__card">
          <ul class="customer__info">
            <li class="customer-item">
              <label>Customer Name:</label>
              <span>${e.name}</span>
            </li>
            <li class="customer-item">
              <label>Company:</label>
              <span>${e.company}</span>
            </li>
            <li class="customer-item">
              <label>Phone Number:</label>
              <span>${e.phone}</span>
            </li>
            <li class="customer-item">
              <label>Email:</label>
              <span>${e.email}</span>
            </li>
            <li class="customer-item">
              <label>Country:</label>
              <span>${e.country}</span>
            </li>
            <li class="customer-item">
              <label>Status:</label>
              <span class="status ${i}">${e.status}</span>
            </li>
          </ul>
        </li>`}).join("");c.innerHTML=t}else{u.classList.remove("visually-hidden"),c.classList.add("visually-hidden");const t=a.map(e=>{const i=e.status==="Active"?"active":"inactive";return`
          <tr>
            <td>${e.name}</td>
            <td>${e.company}</td>
            <td>${e.phone}</td>
            <td>${e.email}</td>
            <td>${e.country}</td>
            <td><span class="status ${i}">${e.status}</span></td>
          </tr>`}).join("");m.innerHTML=t}f()}function b(a){l=a,r()}r();window.addEventListener("resize",r);
//# sourceMappingURL=commonHelpers.js.map
