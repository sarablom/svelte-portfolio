<script>
  import MainHeading from "$lib/mainHeading.svelte";
</script>

<section class="experience">
      <MainHeading headingTitle="Experience" />
      <p>
        I'm a fullstack developer, with focus on frontend. My main
        languages are <span>JavaScript</span> and <span>TypeScript</span> and I've mainly been working
        with <span>React, NodeJS</span> and <span>Express</span>. I have experince with <span>NoSQL</span> and 
        <span>SQL databases</span> like <span>MongoDB, Firebase</span> and <span>SQLite</span>. 
      </p>

      <!-- <p> 
        Other teqniques I've been working with are: 
      </p>
        <ul>
          <li>Adobe XD</li>
          <li>Figma</li>
          <li>Azure</li>
          <li>Git</li>
          <li>GitHub</li>
          <li>Scrum</li>
          <li>Kanban</li>
        </ul>  
       
      <p>
        I've been working in Scrum and Kanban 
        teams for several years,so I know a lot about agile team work. I'm great 
        at keeping a good relationship with both customers and team members.
      </p> -->

      <!-- <p>
        I have many years experience in different work positions like project leader and
        personnel planner. I've also completed a couple of educations, a bachelor degree 
        in learship and change management and master in sustainable urban development. 
        My previous experiences have helped me grow a lot as a person, and I think it
        made me a better employee, with a wider perspective of organizational issues.
      </p> -->

      <h2 class="edu">Work experience<span class="dot"></span></h2>
      
      <ul>
        <li>
          Frontend developer, Medtanken Group
          <br />2023 - current 
          <br />Developing and maintaining apps, internal systems and webpages of multiple health care centers.
          <br />Techniques: React, TypeScript, JavaScript, Flutter, SCSS, Trello, Figma and a little bit of Python
        </li>
        <li>
          Software developer, FrontEdge IT
          <br />2022
          <br />Internship and hourly employment during the end of my education.
          <br />Techniques: React, TypeScript, JavaScript, Next, Gatsby, Node, Express, Styled components, SCSS, Azure, Figma and a little bit of C#
        </li>
        <li>
          Project manager and personnel planner at Trafikantservice        
          <br />2013-2020
        </li>

      </ul>
      
      <h2 class="edu">Education<span class="dot"></span></h2>
      
      <ul>
        <li>
          Frontend development with special orientation towards Web security at Jensens Higher Vocational Education
        </li>
        <li>
          UX and Interaction design at Borås University
        </li>
        <li>Master in sustainable urban development at Malmö University</li>
        <li>Bachelor in leadership, quality and change-management at Uppsala University</li>
      </ul>

      <h2 class="edu">Courses<span class="dot"></span></h2>
      <ul>
        <li>
          CSS for JavaScript Developers - Josh W Comeau
        </li>
        <li>The Joy of React - Josh W Comeau</li>
        <li>Modern JavaScript (Complete guide from Novice to Ninja) - Shaun Pelling</li>
        <li>Design rules: Principles + Practices for Great UI Design - Joe Natoli</li>
        <li>Clean Code - Maximilian Schwarzmüller</li>
        <li>Build Web Apps with React & Firebase - Shaun Pelling</li>
        <li>Svelte Tutorial - Shaun Pelling</li>
        <li>C# Basics for Beginners: Learn C# Fundamentals by Coding - Mosh Hamedani</li>
      </ul>
    </section>

<style lang="scss">
  .experience {
    display: flex;
    flex-direction: column;
    
    margin-bottom: 32px;
    max-width: 600px;

      p {
        margin-bottom: 32px;
      }

      span {
        color: var(--color-checked);
      }

    }
    ul {
        max-width: 600px;
        padding-left: 20px;
        margin-bottom: 32px;
  
        li {
        list-style: star;
      }
      }
  
      @counter-style star {
      system: cyclic;
      symbols: \2606;
      suffix: " ";
      }
    
</style>