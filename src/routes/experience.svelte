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

      <p> 
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
        teams for several years,so I know a lot about agile team work. If I may 
        say it myself, I'm great at keeping a good relationship with both customers 
        and team members.
      </p>
      

      <p>
        I previously worked in the transport sector for 15 years. I started as
        a busdriver, then I managed the bus fleet. After that I worked in the
        trafic controll, to help make sure that all traffic ran smoothly. Then
        I started working for the head of public transport in my region called
        Västtrafik.
      </p>

      <p>
        In between my different work positions I've also completed a couple of
        educations. I have a bachelor degree in learship and change
        management. Even though I figured out I didn't want to be a company
        leader, the education made me grow a lot as a person, and I think it
        made me a better employee, with a wider perspective of organizational
        issues.
      </p>
      
      <h1 class="edu">Education<span class="dot"></span></h1>
      
      <ul>
        <li>
          Frontend development with special orientation towards Web security at Jensens Higher Vocational Education
        </li>
        <li>Master in sustainable urban development at Malmö University</li>
        <li>Bachelor in leadership, quality and change-management at Uppsala University</li>
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