# KICT-Election
INFO 4302 SEMESTER 1 2019/2020      
  
PROPOSAL FOR PROJECT DEVELOPMENT        
KICT ELECTION MOBILE APPLICATION          
LECTURER: ASST. PROF MUHAMMAD SADRY ABU SEMAN    
  
AL KHADIM 

AHMAD HAKIMI BIN IDRUS                  1619847  
AHMAD IZZAT SYAMEER BIN MOHD REDZUAN    1614673  
MUHAMMAD HAZMIE HADIE BIN CHE OMAR      1621879            
WAN ABDUL HALIM BIN WAN ARIF            1610107 

1.0 INTRODUCTION    

For the project, our group decided to create a mobile application that is useful and 
userfriendly to the KICT department. Our project named KICT Election Mobile Application. 
Basically this project is regarding to the election of KICT student represent council every year. 
Student has to vote for the candidate they trusted and it is obligatory to vote. They have to go to 
specific room at KICT building to vote. So here we want to implement an online system for voting 
using the application. The main objective is to use the system on the Election Day efficiently and 
clearly as the student manage to vote by using the application without going to kulliyah building 
to vote. Furthermore, the system will ease the counting of the total vote of each candidate as the 
system already save the data. As has been explained, the system is more efficient for the 
department to run the Election Day and ease all the KICT students to vote for the candidate.  

1.1 PROBLEM STATEMENT    
1.1.1 Background of the Problem  
  
Basically, this system can be access by only the students of International Islamic University 
Malaysia (IIUM) from KICT for voting the student for the election of Student Representative 
Council. The current system which is advertising only through the poster that been pasted 
everywhere in the campus is not efficient enough as our natural resources are dwindling quickly. 
Digital voting is completely eco-friendly thus it will be very decent to the environment. Besides, 
this method of advertising will waste the time as it will take time for the voting committees to tally 
the total voting number for each candidate.   
1.1.2 Problem Statement  
- The students have problem in voting on time. This is because some of them forget to 
vote as busy with classes and transportation problem.  
- The candidates have to spend such amount of money for promoting themselves using 
the poster and banner.  
- Not convenient because the students need to line-up and the committees need to count 
the votes.   
- The using of paper for voting is too much.  

1.2 PROJECT OBJECTIVES    

1. To create an online medium for student to vote their leaders (ie SRC).  
2. To prevent miscalculation during the voting count.  
3. Helping candidates to promote themselves as leader.  
4. To create a paperless platform during voting.  

1.3 FEATURES AND FUNCTIONALITIES
1.3.1 FEATURES
- Authentication
- Vote
- Register candidate details

1.3.2 API
- React-native-image-crop-picker
- Firebase

1.3.3 FUNCTIONALITIES
- Create, Read, Udate and Delete operations regarding candidate details using Firebase
- Use picture from gallery
- Vote for candidate only once
- Store and View the total votes for each candidate

1.4 SCREEN NAVIGATION
1.4.1 API
- Stack Navigator

1.4.2 SCREENS
- Sign In Page
- Admin Authentication Page
- Admin Page
- Add Candidate
- Edit Candidate
- View Votes
- Candidate list
- Cast your vote

1.4.3 ACTIVITY DIAGRAM

![Vote Activity](https://github.com/wanhalim/KICT-Election/blob/master/images/Vote%20Activity.png)

The flow of screens for Voting

1.5 SEQUENCE DIAGRAM

![Sign in](https://github.com/wanhalim/KICT-Election/blob/master/images/sequence%20diagram%20sign%20in.png)

Sign In

![Vote](https://github.com/wanhalim/KICT-Election/blob/master/images/sequence%20diagram%20vote.png)

Vote

1.6 SUMMARY  

Online election system is so important for students who have packed schedule since it can save a lot of time. Students also do not need to waste their time and energy to queue at the polling station to vote for their desire leader. This system also will ensure that students vote for the leader together with giving them opportunity to know all the candidates. However, besides all the strengths, this system also has weaknesses. To gain trust from students to use this system is a big challenge. Some might think that people can trace whom they vote for, however, this system will restrict the candidate view (interface). Thus, there will be no way the candidate will know who are the students that voted and did not vote for them. Even though the system will make sure that one student will only vote once, but the system cannot view the student choice since the vote form will be separated with the students’ id. Thus, the student information will be saved without no one knowing their choice.   
  
1.7 REFERENCES  

[1] acodez, “12 Best Software Development Methodologies with Pros and Cons,” Web Development, 1  
Jun 2018. [Online]. Available: https://acodez.in/12-best-software-development-methodologies-pros-cons/.  
[2] BackLinkMe, “Agile Project Management Methodology - Manifesto, Frameworks and Process,” 
Project Management, 25 April 2018. [Online]. Available: https://backlinkme.net/project 
management/agile-project-management-methodology  
[3] “Campus goes paperless as it takes election campaign online,” 23 September 2018. [Online]. 
Available: https://www.thestar.com.my/news/education/2018/09/23/campus-goes-paperless-as-it-takes 
election-campaign-online/  
 
