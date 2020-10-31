export const project = `
<section>
<!-- <a href="#" class="image"><img src="images/pic01.jpg" alt="" data-position="center center" /></a> -->
<div class="content project">
  <div class="inner">
    <h2>Ravingz</h2>
    <p>
      Ravingz is a group of four software engineers and our task was to extend the capabilities of the 
      database and server layer to support web scale operation of an existing application called Wonder4. 
      Wonder4 has four services, popular dishes, restaurant information, see all photos, and reviews. 
      The service I scaled was see all photos. 
      Other services associated with see all photos must be deployed using AWS Ec2 t2.micro instance.
    </p>

    <b>Problem </b> 
    <p>
    Wonder4's see all photos service was built locally to handle small data sets and a low throughput; therefore, it could potentially interrupt user experience or go offline when experiencing high volume of requests in a production level.
    </p>
    
    <b>Action </b> 
      <p>
        &emsp; &#9679; Implemented load balancing technique using nginx to distribute traffic to a multiple servers. 
        <br />
        &emsp; &#9679; Utilized horizontal scaling by adding three additional t2.micro instances of see all photos server.
        <br />
        &emsp; &#9679; Deployed four Cassandra servers to uniformly distribute data across multiple nodes.
      </p>
    
    <b>Result </b>​
      <p>
      Highly performant application that is capable of handling above 1000 rps with less than 1% error rate. 
      It supports high data availability.
        
      </p>
    
    <ul class="icons">
      <li><a href="https://github.com/Ravingz" target="_blank" class="icon brands fa-github"><span class="label">GitHub</span></a></li>
    </ul>

    <h5>Technologies</h5>
    <p>
      JavaScript, React, Node, Express, HTML/CSS, Cassandra, AWS (EC2, S3), New Relic, Loader.io, Jmeter
    </p>
  </div>
</div>
</section>

<section>
<!-- <a href="#" class="image"><img src="images/pic01.jpg" alt="" data-position="center center" /></a> -->
<div class="content project">
  <div class="inner">
    <h2>Himm</h2>
    <p>
      The task of our group is to build a UI of a Property Reservation Page (PRP) using
      Service Oriented Architecture (SOA) and deploy all services using Dockerized containers on AWS EC2 instances. 
      PRP has four different components: images, profile, reservation form, and reviews. 
      Each component must have its own server and database that renders the component’s UI. 
      All engineers must also implement a proxy server that will fetch all the components’ assets and display a coherent user experience.
    </p>

    <b>Problem </b> 
    <p>
      Implementing the reservation form service that requires frequent updates to the DOM using plain JavaScript is very complex. 
    </p>
    
    <b>Action </b> 
      <p>
        &emsp; &#9679; Implemented load balancing technique using nginx to distribute traffic to a multiple see all photos’ servers. 
        <br />
        &emsp; &#9679; Utilized horizontal scaling by adding three additional t2.micro instances of see all photos server.
        <br />
        &emsp; &#9679; Deployed four Cassandra servers to uniformly distribute data across multiple nodes.
      </p>
    
    <b>Result </b>​
      <p>
      Highly performant application that is capable of handling above 1000 rps with less than 1% error rate. 
      It supports high data availability.
        
      </p>
    
    <ul class="icons">
      <li><a href="https://github.com/HIMM-SF" target="_blank" class="icon brands fa-github"><span class="label">GitHub</span></a></li>
    </ul>

    <h5>Technologies</h5>
    <p>
      JavaScript, React, Node, Express, HTML/CSS, Cassandra, AWS (EC2, S3), New Relic, Loader.io, Jmeter
    </p>
  </div>
</div>
</section>

`;