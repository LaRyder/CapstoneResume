import React from 'react';
import {SiMicrosoftoutlook} from "react-icons/si";
import {BsFillTelephoneFill} from "react-icons/bs";
import {GoLocation} from "react-icons/go";

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
              <h1><b><u>Contact:</u></b></h1> 
              <dl>
              <p><GoLocation></GoLocation> 1 Forest Lane South Hill, Va 23970</p>      
              <p><BsFillTelephoneFill></BsFillTelephoneFill> 434-480-0222</p>
              <p><SiMicrosoftoutlook></SiMicrosoftoutlook> Lauren.Ryder@Microsoft.com</p>
              </dl>

              <h1><b><u> Specific Skills: </u></b></h1>
              <ul>
              <li>HP Server Hardware support</li>
              <li>Cisco, F5 and Juniper Network</li>
              <li>Datacenter network infrastructure</li>
              <li>Organized and efficient in a dynamic and high-pressure environment</li>
              <li>Experience in Bing, Office 365, Xbox, OneDrive and Microsoft Azure platforms</li>
              <li>Experience performing cable installations, hardware rack /stack installations,</li>
              <li>testing, and troubleshooting using standard datacenter processes.</li>
              <li>Problem Solving</li>
              <li>Verbal/Written Communication</li>
              <li>Microsoft Office</li>
              <li>MSAsset</li>
              <li>Phynet/ PNaaS</li>
              <li>GDCO</li>
              <li>CSS</li>
              <li>HTML</li>
              <li>C#</li>
              <li>Javascript</li>
              </ul>
        </aside>
      </div>
    );
  }
}

