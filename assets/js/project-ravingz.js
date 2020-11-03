export const ravingz = `<div class="inner one">
<h2>Ravingz</h2>
<h5>(System Architecture Design)</h5>
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
</div>`