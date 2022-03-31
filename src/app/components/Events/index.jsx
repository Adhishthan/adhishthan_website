import React, { useState } from "react";
import { EventsContainer, EventSection } from "./events";
import "./events.css";
import { Fade } from "react-reveal";
import EventModal from "../EventModal";

const data = [
  {
    id: 1,
    title: "Technical Events",
    image: require("../assets/events/technical.png"),
    registrationLink: "",
    events: [
      {
        title: "DreamTech",
        description: ["Round 1: “MCQ ROUND’- 45 mins.   30 MCQs based on  Fundamentals of C.  Logical questions   based on input  output.Participants with good performance will be  promoted.", "Round 2: “GENERAL TECH” - 45 mins.MCQs based  on general   knowledge of  technical companies, their CEOS etc.Questions will be  displayed on the   projector.", "Round 3: “CODECHAMP” – 45   mins.Participants will  be given program  definition which they  will have to solve  using C / C++.  Whoever completes  first, will be declared the winner"]
      },
      {
        title: "Blind Coding",
        description: [`Round 1: “MCQ” – 45 mins. Basic   questions on C`, `Round 2: “PUZZLE CODING” -1hr. Participants will be  given a piece of paper with a question on it. They will solve  it which will lead them to a desired PC. And they will have to code on it.`, `Round 3: “BLIND CODING”-40mins.Participants will have io solve program   definition in C with   their computer  display off.`]
      },
      {
        title: "Guessozonia",
        description: [`Round 1: “IMAGE 
        BASED” – 45 mins. 
        An image will be 
        given about any 
        technical stuff and 
        the participants will 
        have to guess it.`, `Round 2: “TECHNICAL 
        DUMBCHAREDS”-
        1hr. Dumbchareds of 
        technical stuff. `, `Round 3:“CROSS 
        WORD + CODING” –
        1hr15min. A clue will 
        be given about a word. 
        Participants will have 
        to decode the clue to 
        get the word and then 
        write a program using 
        that word or on that 
        word.`],
      },
      {
        title: "Hardwar",
        description: [`Round 1: “THE 
        QUIZ” -1hr. The 
        participants have to 
        answer quiz related 
        to hardware and 
        computer`,
          `Round 2: “THE 
        MEMORY” -45 MINS. 
        The participants will be 
        taken to a room where 
        hardware parts will be 
        kept and thy will have 
        to memorize the parts 
        and their description. 
        They will be required to 
        answers questions 
        based on them in the 
        given time.`,
          `Round 3: “THE 
        ASSEMBLY” -30 
        mins. Participants 
        will be given the 
        dismantled parts and 
        they will have to 
        assemble it.`]
      },
      {
        title: "Programmer Date",
        description: [`Round 1: 
        “TECHNICAL 
        RIDDLE” – 30 MINS. 
        Participants will be 
        given technical 
        riddles and they will 
        have to solve them.`,
          `Round 2: “CODE 
        DECODE”- 45 mins. 
        Participants will be 
        given a code to 
        decode. They will 
        have to decode 
        without running the 
        code and find the 
        place based on it. 
        They will be required 
        to go there and click 
        a photograph on their mobile phones. `]
      },
      {
        title: "Web Mania",
        description: [`Round 1:
        “CODEPAGE” – 20 
        mins. Participants will 
        be given a HTML page 
        and they will have to 
        code the same.`,
          `Round 2: “SMILEY 
        BOX” – 20 mins. 
        Participants will have 
        to create boxes and fill 
        them with emojis but 
        the number of boxes 
        and the emojis will be 
        provided to them.`,
          `Round 3:
        “CHESSBOARD” – 20 
        mins. Same as round 
        1 but the pages will be 
        more difficult`]
      },
      {
        title: "Photo Bomb",
        description: [`Round 1: “Graffiti”
        1.5 hrs 
        Each participant will be 
        given a topic on that 
        topic they have to 
        make graffiti images 
        with Photoshop 
        software.`,
          `Round 2 : “Poster 
        Making” 1.5 hrs 
        Participants will be 
        given images,png, etc 
        and with use of that 
        they have to make a 
        poster on a given topic`]
      },
      {
        title: "Office Mania",
        description: [`Round 1: MCQ of 30 
        marks - 30 minutes. 
        After the completion of 
        the MCQ round, the 
        shortlisted candidates 
        will be promoted to 
        the next round.`,
          `Round 2: One task 
        from each Word, 
        Power point and Excel-30 minutes (10 
        minutes each but they 
        can utilize whole 30 
        minutes to perform 
        any task).In this task 
        those who completed 
        the all 3 task or who 
        solve maximum task 
        among the candidateswill select for next 
        round.`,
          `Round 3: Two tasks
        form each Word, 
        Power point and Excel-30 minutes. In this 
        round who will solve 
        all the task first or who 
        solved the maximum 
        task they will 
        announce as winner`]
      },
    ],
  },
  {
    id: 2,
    title: "Workshops / Seminar",
    image: require("../assets/events/workshop-event.png"),
    registrationLink: "",
    events: [
      {
        title: "Darkweb Cyber Threat Intelligence",
        description: [`
        30 Min lecture about darkweb 
        Next 30 Min the Moderator will discuss about the cases he dealt in past
        And lastly the moderator will give tips on how to take precautions .`]
      },
      {
        title: "Explore the World with Augmented Reality",
        description: [`The moderator will demonstrate the working of the gadgets and will give basic understanding of the concepts in layman language . 
        Then Last half an hour gadgets will be displayed for a closer look.`]
      },
      {
        title: "Make UI Development Easy with Flutter(Workshop)",
        description: [`First two hours
        The moderator will give overview of flutter, history what is it's use 
        Last 2 hours
        Pure hands-on experience working on a project`]
      },

    ],
  },
  {
    id: 3,
    title: "Non Tech Events",
    image: require("../assets/events/non-tech-events.png"),
    registrationLink: "",
    events: [
      {
        title: "Trust Your Partner",
        description: ["Round 1: Each pair will draw one picture and that picture will passed to another pair. In that pair one person is blind fold. Another person will guide that person to draw that picture. That person have to guide from the back of that blind fold person. ", "Round 2: We will provide the pictures to the pair of team and similar to round 1, one person have to guide another person to draw that picture.But In this round the person will guide verbally but cannot directly tell the name of the object drawn."]
      },
      {
        title: "The Escape Plan",
        description: ["Round 1: Guess the place/area through emoji/picture. Like we will give participants the list of 10-13 emoji words, from which only 1 emoji word will be any particular location and they have to guess all of them to find that one correct place/area inside the college. Example: the image of park + king + lodge = Parking lodge.", "Round 2: Obstacle can be a box(which will be locked with code) and they have to guess that code with help of a given puzzle."]
      },
      {
        title: "Meme Guruji",
        description: ["Round 1: They have to complete the incomplete memes given by our team.", "Round 2: They have to identify the caption of the memes from the given picture", "Round 3: They have to create memes on particular topic given by our team."]
      },
      {
        title: "Clash Of Time",
        description: ["Round 1: Blow the balloons and hold the glasses using balloons and collect maximum number of glasses.", "Round 2: Participants will have one leg tied to her partner then after each participants have to hold racket and have to place one ball on racket and collect maximum number of balls by walking.", "Round 3: In this game one participant is blindfolded and the other partner has to guide the other through the obstacle path and complete the given task in given time period."]
      },
      {
        title: "I’m Holmes",
        description: ["Round 1: A Bollywood movie which has some mystery, based on that mystery some keywords will be provided, now Bollywood movies list will be provided and based on the mystery given they will have to solve the mystery and match the movie name from given list. ", "Round 2: A video clip will be shown from some movie which has actors who have many movies together(to make it more mysterious) they will have to tell the movie name and also what was the name of the actor and actresses role in that movie. ", "Round 3: They have to guess a Bollywood movie name based on some emojis given to them."]
      },
      {
        title: "Cricket-E Phantoms",
        description: ["Round 1: Rapid fire round Each team will be given certain number of chits on which question will be written. Each team will send its one member who will pick the chit and ask question to them the team giving maximum correct answer in time will win. Time given will be 30 sec. ", "Round 2: IPL Satta It is a special type of auction where the teams have to bid without knowing the name of player’s name. The team with highest bid will get chance to choose desired player. Base price will be fix for everyone. In this round the rating list of players and virtual money will be provided to each team. ", "Round 3: Khel Dikha The teams that will win in round 2 will play against each other and we will have 3 overs."]
      },
      {
        title: "Treasure Hunt",
        description: ["Round 1: The Clues are crossed. One team is dependent on another team to move ahead.", "Round 2: The difficulty level is increased."]
      },

    ],
  },
  {
    id: 4,
    title: "Gaming",
    image: require("../assets/events/fun-games.png"),
    registrationLink: "",
    events: [
      {
        title: "Valorant",
        description: [`There will be 3 rounds. Knockdown Semi finals and finals.`]
      },
      {
        title: "BGMI",
        description: [`There will be 3 rounds. Knockdown Semi finals and finals.`]
      },
      {
        title: "Mini Militia",
        description: [`There will be 3 rounds. Knockdown Semi finals and finals.`]
      },
    ],
  },
  {
    id: 5,
    title: "Cultural Events",
    image: require("../assets/events/cultural-events.png"),
    registrationLink: "",
    events: [
      {
        title: "Abhyuday",
        description: [`Madhuben and Bhanubhai Patel Institute of Technology introduces Abhyuday – Unleash Your Talent - it’s an amalgamation of cultural fest, which includes events from the various art categories like Dance, Music, Theatre, Literature and Fine arts. The goal here is to define and encourage talent, then map out, how it can be unleashed.`]
      },
      {
        title: "Infinity Wave",
        description: [`College is not just about studying but also about having a good time with friends and creating memories. Ahead of the Annual Fest "Adhisthan-22" in MBIT, the DJ night " Infinity Wave - let the music speak" was held to set a mood of celebration and give a taste of fun and happening college life.`]
      },
    ],
  },
];

function Events() {
  const [currData, setcurrData] = useState(null);
  const [isOpen, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  return (
    <Fade bottom>
      <EventsContainer>
        {data.map((item) => (
          <EventSection
            title={item.title}
            image={item.image}
            id={item.id}
            events={item.events}
            onClick={(eventData) => {
              setcurrData(eventData);
              setOpen(!isOpen);
            }}
          />
        ))}
        <EventModal data={currData} open={isOpen} close={handleClose} />
      </EventsContainer>
    </Fade>
  );
}

export default Events;
