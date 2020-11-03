export const himm = `<div class="inner two">
    <h2>Himm</h2>
    <h5>(Service Architecture Design)</h5>
    <p>
      The task of our group is to build a UI of a Property Reservation System (PRS) using
      Service Oriented Architecture (SOA) and deploy all services using Dockerized containers on AWS EC2 instances. 
      PRS has four different components: images, profile, reservation form, and reviews. 
      Each component must have its own server and database that renders the component’s UI. 
      All engineers must also implement a proxy server that will fetch all the components’ assets and display a coherent user experience.
    </p>

    <b>Problem </b> 
    <p>
      Implementing the reservation form service that requires frequent updates to the DOM using plain JavaScript is simply complicated. 
      Building the entire PRS into a single service is difficult to maintain because multiple components are interacting within an environment. 
    </p>
    
    <b>Action </b> 
      <p>
        &emsp; &#9679; Implement the reservation form service using React hooks to simplify the composition of components. 
        <br />
        &emsp; &#9679; Leverage Context and useReducer to easily manage the state of the reservation form.
        <br />
        &emsp; &#9679; The PRS's services were divided into multiple components.
      </p>
    
    <b>Result </b>​
      <p>
        Components are easier to maintain, faster development, promotes code reuse, and efficient.
        Because the reservation form is isolated from other PRS services, it is easy to maintain, debug, and test.
      </p>
    
    <ul class="icons">
      <li><a href="https://github.com/HIMM-SF" target="_blank" class="icon brands fa-github"><span class="label">GitHub</span></a></li>
    </ul>

    <h5>Technologies</h5>
    <p>
      React (hooks), Node, Express, HTML/CSS, AWS (EC2), Docker, MongoDB, Styled-components
    </p>
  </div>`;