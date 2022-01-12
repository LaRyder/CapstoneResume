import React from 'react';
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const skills = [
  {
    trigger: 'Problem Solving',
    text: 'Defining a problem; determining the cause of the problem; identifying, prioritizing, and selecting alternatives for a solution; and implementing a solution.'
  },
  {
    trigger: 'Verbal/Written Communication',
    text: 'Language, each written and spoken'
  },
  {
    trigger: 'HP Server Hardware support',
    text: 'Perform basic diagnostics and troubleshooting by following standard procedures to identify the cause of issues and replace faulty components with minimal customer and business disruption.'
  },
  {
    trigger: 'Cisco, F5, and Juniper',
    text: 'Types of network gear deployed in the Data Center.'
  },
  {
    trigger: 'Datacenter network infrastructure',
    text: 'Servers, Computers, Networking equipment, such as routers or switches, Security, such as firewall or biometric security system, Storage, such as storage area network (SAN) or backup/tape storage, Data center management software/applications.'
  },
  {
    trigger: 'Organized and efficient in a dynamic and high-pressure environment',
    text: 'Strong results-orientation and demonstrates focus on high-quality work. Strong work ethic. Organized, efficient, process oriented Self-motivated, team player. Works well under pressure in a dynamic environment.'
  },
  {
    trigger: 'Experience in Bing, Office 365, Xbox, OneDrive and Microsoft Azure platforms',
    text: 'Services many customers use that are provided by Microsoft'
  },
  {
    trigger: 'Experience performing cable installations, hardware rack /stack installations, testing, and troubleshooting using standard datacenter processes.',
    text: 'Fiber, AOC, and copper cable intallations / Installing network device equipment in the production area / Actioning tasks to ensure equipment is functioning properly.'
  },
  {
    trigger: 'Microsoft Office',
    text: 'A suite of desktop productivity applications that is designed specifically to be used for office or business use.'
  },
  {
    trigger: 'MSAsset',
    text: 'An application to manage asset and configuration management information in both managed and non-managed data centers.'
  },
  {
    trigger: 'Phynet/ PNaaS',
    text: 'A tool that assists with logically configuring network devices on site to allow access and monitors connections to allow traffic across clusters.'
  },
  {
    trigger: 'GDCO',
    text: 'An Application (formerly MSAsset) to manage asset and configuration management information in both managed and non-managed data centers.'
  },
  {
    trigger: 'CSS',
    text: 'A simple design language intended to simplify the process of making web pages presentable.'
  },
  {
    trigger: 'HTML',
    text: 'Hypertext Markup Language, a standardized system for tagging text files to achieve font, color, graphic, and hyperlink effects on World Wide Web pages.'
  },
  {
    trigger: 'SQL',
    text: 'A standard language for storing, manipulating and retrieving data in databases.'
  },
  {
    trigger: 'C#',
    text: 'An object-oriented programming language created by Microsoft that runs on the .NET Framework.'
  },
  {
    trigger: 'Javascript',
    text: 'An object-oriented computer programming language commonly used to create interactive effects within web browsers.'
  },
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
          <h1 className='mHeader'><b><u> Specific Skills: </u></b></h1>
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
        </aside>
      </div>
    );
  }
}

