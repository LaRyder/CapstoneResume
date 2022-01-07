import React from 'react';
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const skills = [
  {
    trigger: 'HP Server Hardware support',
    text: 'Perform basic diagnostics'
  },
  {
    trigger: 'Cisco, F5, and Juniper',
    text: 'etc'
  }
];

export default class Skills extends React.Component {
    render (){
        return (
        <div class="row">
          <div class= "sidebyside">
            <h1 className='mHeader'><b><u>My Experience:</u></b></h1>
              <p><b><u>Microsoft Leap Internal Program July 2021 - Present</u></b></p>
                <p><i>Leap Apprentice</i></p>
                <ul>
                  <li>~ Work as part of a development team to implement solutions on impactful projects.</li>
                  <li>~ Learn software engineering fundamentals and a variety of skills that will provide knowledge to work across the full stack of Microsoft products.</li>
                </ul>
                <p><b><u>Microsoft May 2017- Present</u></b></p>
                <p><i>Site Services Technician Boydton, VA</i></p>
                <ul>
                  <li>~ Daily collaboration amongst a team of diverse professionals to support physical infrastructure, cabling, parts/component replacements, and troubleshooting of DC operations.</li>
                  <li>~ Responsible for effectively prioritizing daily assignments of tasks and tickets based on business requirements</li>
                  <li>~ Relied upon to complete high visibility HBI Asset Audits across Multiple Datacenters to enable compliance and regulatory audit preparation activities.</li>
                  <li>~ Focused on flexibility to support the Datacenter in any capacity when called upon.</li>
                  <li>~ Takes pride in providing outstanding customer service through highly developed communication skills.</li>
                  <li>~ Ensure processes and procedures are followed, and that trust and integrity is maintained per Microsoft Global Foundation Services policy.</li>
                </ul>
                <p><b><u>Atos IT Solutions & Services February 2015 – May 2017</u></b></p>
                <p><i>Site Services Technician Boydton, VA</i></p>
                <ul>
                  <li>~ Monitor and control daily service ticket activity, customer calls and service levels.</li>
                  <li>~ Resolve technical problems with hardware, software and connectivity.</li>
                  <li>~ Install/ upgrade/ replace server, device, or network components as needed.</li>
                  <li>~ Networking support (protocols, troubleshooting connectivity).</li>
              </ul>
          </div>

        <aside>
          <h1><b><u> Specific Skills: </u></b></h1>
          <ul>
            {skills.map((skill) => {
              return (
                <li>
                  <Popup trigger={<button>{skill.trigger}</button>}>
                    <div class="text">{skill.text}</div>
                  </Popup>
                </li>
              );
            })}
            </ul>
            {/* <li><Popup trigger={<button>HP Server Hardware support</button>}>
            <div class="text">Perform basic diagnostics and troubleshooting by following standard procedures to identify the cause of issues and replace faulty components with minimal customer and business disruption.</div>
            </Popup></li>
            <li><Popup trigger={<button>Cisco, F5 and Juniper Network</button>}>
            <div class="text">Types of network gear deployed in the Data Center.</div>
            </Popup></li>
            <li><Popup trigger={<button>Datacenter network infrastructure</button>}>
            <div class="text">Servers, Computers, Networking equipment, such as routers or switches, Security, such as firewall or biometric security system, Storage, such as storage area network (SAN) or backup/tape storage, Data center management software/applications</div>
            </Popup></li>
            <li><Popup trigger={<button>Organized and efficient in a dynamic and high-pressure environment</button>}>
            <div class="text">Strong results-orientation and demonstrats focus on high-quality work. Strong work ethic. Organized, efficient, process oriented Self-motivated, team player. Works well under pressure in a dynamic environment</div>
            </Popup></li>
            <li><Popup trigger={<button>Experience in Bing, Office 365, Xbox, OneDrive and Microsoft Azure platforms</button>}>
            <div class="text">Services many customers use that are provided by Microsoft</div>
            </Popup></li>
            <li><Popup trigger={<button>Experience performing cable installations, hardware rack /stack installations,
            testing, and troubleshooting using standard datacenter processes.</button>}>
            <div class="text"></div>
            </Popup></li>
            <li><Popup trigger={<button>Problem Solving</button>}>
            <div class="text"></div>
            </Popup></li>
            <li><Popup trigger={<button>Verbal/Written Communication</button>}>
            <div class="text"></div>
            </Popup></li>
            <li><Popup trigger={<button>Microsoft Office</button>}>
            <div class="text"></div>
            </Popup></li>
            <li><Popup trigger={<button>MSAsset</button>}>
            <div class="text"></div>
            </Popup></li>
            <li><Popup trigger={<button>Phynet/ PNaaS</button>}>
            <div class="text"></div>
            </Popup></li>
            <li><Popup trigger={<button>GDCO</button>}>
            <div class="text"></div>
            </Popup></li>
            <li><Popup trigger={<button>CSS</button>}>
            <div class="text"></div>
            </Popup></li>
            <li><Popup trigger={<button>HTML</button>}>
            <div class="text"></div>
            </Popup></li>
            <li><Popup trigger={<button>C#</button>}>
            <div class="text"></div>
            </Popup></li>
            <li><Popup trigger={<button>Javascript</button>}>
            <div class="text"></div>
            </Popup></li> */}
        </aside>
      </div>
    );
  }
}

