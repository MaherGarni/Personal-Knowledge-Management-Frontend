# PKM — Personal Knowledge Management  

A full-stack skill tracking app built as my capstone project for the SDA x General Assembly software development bootcamp.


## Overview 

### The Problem
Learning across multiple skills at once is messy. Topics pile up, progress is invisible, and there's no easy way to know how far you've actually come. I wanted a way to organize my learning that reflected real growth — not just a list of things I studied.

### The Solution
PKM lets users create skills they want to develop and record lessons as they learn. Each lesson is evaluated by AI — first checked for relevance to the chosen skill, then scored based on lesson quality and topic advancement. Those scores generate points that build the skill rating over time. The result is a dashboard that reflects where you actually stand across every skill you're working on.


## App Pages

PKM has three main pages: Categories, Skill Lessons, and Dashboard.
<br>
### Categories & Skills

The main page where users browse and create skills. Skills follow a three-level hierarchy:<br>
**Skill Domain → Skill Area → Skill** <br>
The top two levels are predefined. Users create skills at the third level under whichever area fits.

![Categories Preview](./assets/Categories.png)

For example: *Technical Mastery → Backend Development → Django REST Framework*. A user tracking their backend progress would create skills like *Django REST Framework*, *PostgreSQL*, and *Python* under *Backend Development*.

The hierarchical structure keeps skill creation organized. The decision to predefine the top two levels ensures the AI has the right context for meaningful and accurate rating evaluations.

Once a skill is created, clicking on it opens the Skill Lessons page.
<br>
<br>
### Skill Lessons
this page where user can see skill details, browse lessons created and create new lessons entries. Each lesson represents new knowledge or an experience gained while developing that skill. Over time, these lessons build up to show the user's progress and growth within each skill.

the page theme color is based on user's chosen color for the skill.


![Skill lesssons](./assets/Skill%20lessons.png)

the layout of the page is split into two sections, side panel and lesson details section. 

side panel shows skill details — rating, lesson count, daily AI limit — and the list of recorded lessons. Clicking a lesson card opens it in the lesson detail section.

The lesson detail section displays the lesson title and content, along with AI evaluation data — lesson score and points earned.

- **lesson score** represents how well user demonstrated understanding of the topic. 
- **lesson points** it's what gets added to the skill rating, calculated with two factors: lesson score and topic advancement level. Higher quality lessons on advanced topics earn more points.

The AI evaluation data is generated during lesson submission. Here's how the submission flow works:

#### Lesson Submission Flow
Each lesson submission goes through a multi-step AI evaluation before being saved.

![lesson submission flow](./assets/Lesson-submission.gif)

the flow of the evaluation process :

- Lesson matching: checks if the submitted lesson belongs to the chosen skill. If it matches, evaluation continues. If not, the lesson is rejected. *(mismatch lesson example below )*

- Scoring Lesson : once matched, lesson is sent to Gemeni AI API for evaluation, the AI returns two values :
        <ul style="list-style-type: square">
 		   <li>**lesson score** : how well user demonstrate understanding of the topic.</li> 
 		   <li>**advancement level** : represents how advance the lesson is based on the skill it belongs to.</li> 

These two values are used in a formula to calculate lesson points. The better the lesson quality and the more advanced the topic is, the higher points the lesson will received.<br>

Once evaluated, the score and points are saved with the lesson entry.
        </ul>
- Updating Ratings: lesson points are added to the skill rating. and skill area that the skill belongs to is then updated as well.

#### Lesson Mismatch
lessons that don't belong to the selected skill will be rejected, and mismatch message shown to the user


![lesson mismtach](./assets/Lesson-submission-mismatch.gif)
<br>
<br>
### Dashboard page
This page shows user stats and an overview of skill ratings across different skill domains.

![Dashboard Page](./assets/Dashboard.png)
*(Data shown belongs to a demo account.)*



## Technology Used  

- **React (Frontend Framework)**   
- **Routing (React Router)**   
- **Icons (Lucide React)**   
- **Charts (React Recharts)**   
- **Vite (Environment)**   

## Project Links  
- **[Backend Repo](https://github.com/MaherGarni/Personal-Knowledge-Management-Backend)**  
## Icebox Features  
- Lesson attachments (images, files, code snippets)  
- Additional learning domains (not only tech)
- Search functionality 
