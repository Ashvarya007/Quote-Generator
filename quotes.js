const sitcomQuotes = [
    {
        "show": "Friends",
        "character": null,
        "text": "I'll be there for you.."
    },
    {
        "show": "Gilmore Girls",
        "character": "Lorelai",
        "text": "Lorelai: The Wizard of Oz.\nRory: The Sting.\nLorelai: Rocky.\nRory: Crimes and Misdemeanors.\nLorelai: The Singing Detective.\nRory: That was a miniseries.\nLorelai: So?\nRory: So, it's like six hours long.\nLorelai: Good point. Oh, I got it. Arthur.\nRory: Yes.\nLorelai: Or Sophie's Choice.\nRory: Very similar.\nLorelai: Oh, man. I can't choose. There's too many great movies. The burden is overwhelming. I'm sinking under the pressure. My grasp on reality is slipping. I can't do it, I just can't... [phone rings] Ooh, how about Cabin Boy?"
    },
    {
        "show": "Brooklyn Nine-Nine",
        "character": "Charles",
        "text": "Charles: Look how cool and illegible his handwriting is. Oh, I wish I could be that free. But you know me, ever the calligrapher."
    },
    {
        "show": "Malcolm in the Middle",
        "character": "Dewey",
        "text": "Mrs. Demarco: I was thinking Ronnie would like a Star Wars theme for his party.\nDewey: No, do cowboys!\nMrs. Demarco: What?\nDewey: Cowboys. He likes cowboys better than Star Wars.\nMrs. Demarco: OK, that'll be fun. Thank you, Dewey. [\"zips mouth shut\"]"
    },
    {
        "show": "Friends",
        "character": "Rachel",
        "text": "Rachel: What if he calls his own cell phone to find out who found it and I answer and we start talking and we fell in love? I mean, wouldn't that be a great story? Kind of like a fairy tale for the digital age."
    },
    {
        "show": "The Office",
        "character": "Pam",
        "text": "Pam: Did I wake up this morning thinking I'd be throwing together a bird funeral? You never can tell what your day here is gonna turn into."
    },
    {
        "show": "Everybody Loves Raymond",
        "character": "Frank",
        "text": "Marie: Raymond's upset. It's okay, dear. It's just preschool.\nDebra: That's what I told him. And if he has to stay, Geoffrey will stay with him.\nMarie: Oh, that's good.\nFrank: No, no, no!\nDebra: Why not, Frank?\nFrank: Law of nature, you get left behind, you get eaten. You're too soft on the kids. You gotta push 'em, push 'em forward. Just keep pushing 'em!\nDebra: Until when, Frank?\nFrank: Until they cry. That's nature's way of letting you know you've pushed enough.\nRobert: Here's a man they let have two children."
    },
    {
        "show": "Everybody Hates Chris",
        "character": "Ms. Morello",
        "text": "Ms. Morello: The fact is, you shouldn't be here.\nChris: Well, I'm sorry. I just wanted to see this movie. I didn't think missing one day of school would hurt.\nMs. Morello: Chris, I know you must be a big Ernie Hudson fan - Thalmus is, too - but do you think Ernie Hudson cut school to go see Gary Coleman movies while he was growing up?\nAdult Chris: [v.o.] Gary Coleman made a movie?\nMs. Morello: And, Greg, you should be ashamed of yourself. You can see a White man in a movie anytime."
    },
    {
        "show": "Everybody Loves Raymond",
        "character": "Frank",
        "text": "Debra: Gosh, Daddy, Madagascar sounds great.\nLois: I've been dying to go.\nFrank: Well, seeing as how you two are so chummy, maybe Warren'll take you with him.\nLois: No, thank you. No more traveling with Warren. He spends all of his time looking at his tip conversion chart. [Lois & Warren laugh]\nDebra: Oh, you two took some amazing trips together.\nFrank: Yeah, that sounds peachy. Warren, what about Al, Al, the ladies' pal?\nRay: Dad.\nWarren: What's that, Frank?\nFrank: \"Al E. Money.\" That's gotta be a big bite outta your ass, huh?"
    },
    {
        "show": "Brooklyn Nine-Nine",
        "character": "Charles",
        "text": "Jake: Guys, stop! It's a movie about cupcakes!\nSergeant Jeffords: You don't understand!\nCharles: You don't have kids!"
    },
    {
        "show": "Frasier",
        "character": "Frasier",
        "text": "Frasier: All right, is there something else going on?\nRoz: Last night was a disaster.\nFrasier: Oh, right, your date.\nRoz: You see, everything was going fine until he tried to order me a drink, but then I told him I was pregnant.\nFrasier: You didn't tell him you were pregnant before the date?\nRoz: Well, that's not the easiest thing in the world to tell someone. Besides, I was hoping my radiant glow would do the talking for me.\nFrasier: Your glow. [laughs] Oh, please, Roz, do you really think that... anyone could miss your glow?"
    },
    {
        "show": "Everybody Loves Raymond",
        "character": "Ray",
        "text": "Ray: All right. You wouldn't talk to me this morning, you wouldn't talk to me this afternoon. And you wouldn't talk to me tonight, but there's something I want to get off my chest. And it doesn't matter if you wanna hear it or not, because I am gonna say it. Yes, I may have used your anger in a pleasurable way, but that pleasure was not just my own! Huh? So if I used you, you used me right back, lady! Admit it. It was like therapy for you. You used me like I was your therapist! Your physical therapist! So before you judge me, you look yourself in the mirror without the makeup on! That's right! And you ask yourself, \"Isn't this what marriage is? The mutual using of each other\"! I think so! And let me tell you, we will get past this unpleasantness as a couple if you will let me sleep here tomorrow."
    },
    {
        "show": "The Fresh Prince of Bel-Air",
        "character": "Geoffrey",
        "text": "Geoffrey: Well, if you're so confident in my lack of ability perhaps you'd like to make a little wager. Say, $30?\nWill: Done.\nContestant: [on TV] Vietnam for $200.\nQuiz Show Host: [on TV] You drew the wild card.\nCarlton: What do you say, Geoffrey? Want to double your bet?\nGeoffrey: Well, it is an awful lot of money but, what the hell.\nQuiz Show Host: And the question is... \"Who is the South Vietnamese president killed by his own generals in 1963?\" [Will & Carlton laugh]\nGeoffrey: Ngo Dinh Diem.\nQuiz Show Host: [on TV] [buzzer] No guesses? The correct answer is Ngo Dinh Diem.\nGeoffrey: [chuckles] Splendid. [exits]\nWill: I say we call Immigration."
    },
    {
        "show": "Modern Family",
        "character": "Alex",
        "text": "Claire: Okay, fine! Fine! You know what? I am really tired of trying to make this work on my own. I will see you people in a year.\nAlex: And nine days."
    },
    {
        "show": "Boy Meets World",
        "character": "Mr. Feeny",
        "text": "Mr. Feeny: I already have my Hamlet. He may bump into the scenery. He may talk like a hayseed. For all I know, tomorrow he may show up in kabuki make up. Never the less, he is my hamlet."
    },
    {
        "show": "Scrubs",
        "character": "Dr. Cox",
        "text": "Doug: Um, Dr. Cox, I have a patient with blennorrhea and I was wondering if you think that is interesting enough to present to Dr. Kelso?\nDr. Cox: Gosh, I'm sorry, Nervous Guy, but I just can't do your work for you. But what do you say you head on down to the library and look it up in the New England Journal of \"Who Gives a Rat's Ass\"? You've got to leave this instant, this second, this moment. Just go. [Doug whimpers]"
    },
    {
        "show": "3rd Rock from the Sun",
        "character": "Tommy",
        "text": "Sally: So, Tommy, how was your science fair?\nTommy: Oh, uh funny story. Um, remember that frog I reanimated? Well, it kind of developed a taste for human flesh. Someone's got to go see my science teacher tomorrow."
    },
    {
        "show": "New Girl",
        "character": "Winston",
        "text": "Schmidt: The shredder shredded it, bro.\nWinston: No, no, no, no, guys, we're fine. I can work with this."
    },
    {
        "show": "The Office",
        "character": "Pam",
        "text": "Pam: We invited everyone in the office to our wedding, even though we realized most people wouldn't be able to make the drive to Niagara Falls. [quietly] Which is why we're having it in Niagara Falls. Then Michael told everyone they could have Friday and Monday off if they came. So now people have to decide if they want to come to our wedding or have to work."
    },
    {
        "show": "Arrested Development",
        "character": "Maeby",
        "text": "George Michael: I was this close to telling Rebel the whole truth: that you fired everyone months ago, and the thing is a fraud. Then we open the doors, and the place is abuzz. She totally bought it. She wants to invest now.\nI don't know how you did it, but it was great. You got people there for the day.\nMaeby: I didn't hire anybody for the day.\nGeorge Michael: Then where did those people come from? The place was wall-to-wall nerds.\nMaeby: Yeah, this is making sense. Those people that you saw didn't come in for the day. They never left. Remember when I said I fired everybody? What I did was, I asked Joan in HR to fire everybody for me. And then, so I didn't have to make two phone calls, I fired her there on the spot.\nGeorge Michael: So you fired the person in charge of...\nMaeby: Firing. Yes. So, you know, you fire the person in HR last. That's the lesson here. But, hey, this is how you learn in business, am I right?\nGeorge Michael: You mean we're still somehow paying these people?\nMaeby: Well, we're not paying Joan in HR. Gotta give me credit for that one."
    },
    {
        "show": "Brooklyn Nine-Nine",
        "character": "Gina",
        "text": "Gina: Ladies and gentlemen, welcome to the most anticipated event in this precinct's history.\nJake: The auction for The Suitcase of Mystery!\nGina: Exactly, Jacob. This puppy's been in the lost and found since 1976. No one alive today knows its contents. I'm happy to say Captain Holt has finally given me permission to auction it off."
    },
    {
        "show": "Home Improvement",
        "character": "Marty",
        "text": "Marty: You, uh... you starting the lighting contest a little early?\nTim: Well, my strategy this year is to intimidate Doc Johnson, OK?\nMarty: What are you gonna do? Stick a reindeer head in his bed? [off Tim's look] Oh...\nTim: That's not a bad idea."
    },
    {
        "show": "3rd Rock from the Sun",
        "character": "Mary",
        "text": "Don: Oh, hello, Mary. God's teeth, it's cold in here! Have you seen Sally?\nMary: No.\nDon: I don't understand it. I haven't heard a word from her since I proposed. Why would she do that?\nMary: I don't know. Why are you asking me?\nDon: And I was so pumped up. I thought it was gonna be a slam dunk like you said.\nMary: Well, I- I don't think I said slam dunk.\nDon: Yes, you did.\nMary: Well... What I meant by \"slam dunk\" was... you never really know."
    },
    {
        "show": "Scrubs",
        "character": "Turk",
        "text": "Turk: Dude. You've seen the new administrative assistant?\nJ.D.: [v.o.] For some reason, whenever I see a pretty girl, for the first time, I always imagine her hair blowing in slow-mo. [woman's hair blows] Unfortunately, Turk knows this, so I have to snap out of it before he messes with me.\n[Turk tries to clamp a peg to J.D.'s face]\nJ.D.: Heya! Too slow.\nTurk: Dude, I almost had you.\nJ.D.: Well, score one for J-Dizzle.\n[J.D. realizes the pen in his hand has been replaced with a hot dog]\nTurk: Ha, hot dog pin! Count it, honkey-face."
    },
    {
        "show": "The Golden Girls",
        "character": "Sophia",
        "text": "Rose: We were telling Best Sex Ever stories, Sophia.\nDorothy: Yeah, but now we're tired of telling them, so why don't we go to bed, huh?\nSophia: No, wait. It's a good thing I'm up, because it so happens that I have a story for you, the sex story to end all sex stories. Sicily, 1922. I stop by a little trattoria. No, wait. I'm thinkin' of the best meal I ever had."
    },
    {
        "show": "The Fresh Prince of Bel-Air",
        "character": "Philip",
        "text": "Philip: What the hell are you doing down here?\nWill: Oh, um, I thought I heard somebody breaking in. What you doing down here?\nPhilip: Uh, the same thing.\nWill: Pie's in the fridge.\nPhilip: Yep. Nothing like sneaking a little pie before Thanksgiving.\nWill: Shh! Shh!\nPhilip: Don't shush me. This is not the first Philip Banks pie-jacking. Son, son, I have been jacking pies since, what, Thanksgiving 1953. Rhubarb. Tart little thing. From then on, the dog ate the pie. [Hattie turns the lights on]\nWill: Hey.\nHattie: So I guess it's your nose I should've been shoving in the pan.\nWill: Well, you know, actually, keeping his nose out of the pan would have been more of a punishment.\nPhilip: Get off of me."
    },
    {
        "show": "Brooklyn Nine-Nine",
        "character": "Sergeant Jeffords",
        "text": "Sergeant Jeffords: Jake, I have to tell you something.\nJake: Oh, boy.\nSergeant Jeffords: I am a little conflicted about having a vasectomy.\nJake: Really? Is that why you threw an EKG machine at the doctor?\nSergeant Jeffords: I'm sorry I thought of you as a work friend. You're here, man. You're a friend friend. You made Terry get real with himself and his genitals. Your tiny head has a big heart inside it.\nJake: I know that's scientifically wrong, but thanks, sarge."
    },
    {
        "show": "Friends",
        "character": "Chandler",
        "text": "Chandler: You want this scone? It came for me but it would probably rather sleep with you."
    },
    {
        "show": "Modern Family",
        "character": "Gloria",
        "text": "Jay: Crap. Crap. Crappacino. Charlie Craplin.\nGloria: In Colombia, when the old man starts yelling at the mail, we put them on a sandbar and wait for the tide to come in."
    },
    {
        "show": "Modern Family",
        "character": "Gloria",
        "text": "Gloria: If I want to get fat, I get fat.\nJay: Well, okay, fine. And if you do, I'll be there. You'll see.\nGloria: Yeah, watch me. Watch me, how I get fat. I can get fat.\nJay: And I'll be there.\nGloria: Good. You wanna go back in?\nJay: No. I got a better idea. Let's go salsa dancing. This guy's not that funny.\nGloria: [gasps] Perfect."
    },
    {
        "show": "The Fresh Prince of Bel-Air",
        "character": "Ashley",
        "text": "[fantasy:]\nAshley: Good morning, Geoffrey. Morning, everybody. [nobody responds] Geoffrey, my place isn't set, and where's my food? [Geoffrey doesn't respond]\nWill: Oh, hey, let me feed my favorite little cousin.\nHilary: Oh, now, come on.\nCarlton: Oh, I thought it was my turn.\nAshley: I thought I was your favorite cousin. What do I have to do, spit up on your shirt?\nWill: Y'all hear something?\nAshley: Yeah, how about me screaming at the top of my lungs? [screams]\nWill: I guess not. I be tripping, boy, tripping."
    },
    {
        "show": "New Girl",
        "character": "Schmidt",
        "text": "Schmidt: Yeah, no, nobody gets rowdy like us Romney boys. Just a bunch of alphas, you know what I mean?That is, of course, unless we're fishing on Lake Winnipesauke. There's nothing that I love more than just getting out on the water with Dad, the freezing cold dawn, a couple of cold beers in hand. Having that one quick moment...\nCourtney: Your dad doesn't drink. He's a Mormon.\nSchmidt: Well, we don't drink the beers, Courtney. You know, we just buy them to support American breweries. Then we dump them in the lake. 'Cause we're Americans."
    },
    {
        "show": "The Goldbergs",
        "character": "Adam",
        "text": "Erica: No way. That's impossible. Dad doesn't cry, ever.\nAdam: I know what I saw. Human tears coming out of his face."
    },
    {
        "show": "The Middle",
        "character": "Tag",
        "text": "Tag: It was a moonless night. I was stationed in Korea. And my boot came untied-\nPat: Everyone's heard the story, Tag. You tell it every Thanksgiving.\nTag: The Marines haven't heard it.\nPat: Yes, they have. You've told that story so many times, it's gone all the way around the world, and even they have heard it."
    },
    {
        "show": "Brooklyn Nine-Nine",
        "character": "Captain Holt",
        "text": "Gina: I've been asking you for months if I could answer the phone like, (singing) \"Who dis?\"\nCaptain Holt: Give it a whirl, girl."
    },
    {
        "show": "Cheers",
        "character": "Diane",
        "text": "Diane: [to a pair of older customers] I suppose you're wondering why a person of my breeding would be working among the lumpen proletariat. Do you mind? I'm researching a novel, and working here gives me insight into their simple pleasures.\nNorm: Oh, wait, wait. They're zooming in on a cheerleader here.\nSam: I think I've zoomed in on that one myself.\nDiane: This language supplies the rich texture that distinguished Fitzgerald's work.\nNorm: Cliffie, here comes the wave.\n[As a Mexican wave goes around the bar, Diane raises from the table]\nDiane: Well, you have to go along with them, or they get testy.\n[As the Mexican wave returns, Diane and her two customers also raise]\nDiane: That's good."
    },
    {
        "show": "New Girl",
        "character": "Schmidt",
        "text": "Jess: Come on! Flip it! Flip it! Come on, Schmidt, flip it!\nSchmidt: Oh, forget it.\nJess: What are you doing?\nSchmidt: I don't know. I used to crush at the gym and now I'm just mediocre, like early Beyoncé. Nobody will say it, but you know it's true."
    },
    {
        "show": "Malcolm in the Middle",
        "character": "Malcolm",
        "text": "Malcolm: I don't want a horse. We all worked for this. I say we vote on what we get. Dewey?\nDewey: Can God see everything we do?\nMalcolm: What?\nDewey: Mrs. Potts said God sees everything we do.\nReese: Yeah, Dewey. God can magically see through roofs.\nMalcolm: What are you worried about? We're not doing anything wrong.\nDewey: Then how come we have money?\nMalcolm: Well, uh, sometimes when you do good things, good things happen for you.\nReese: Satisfied?\nMalcolm: I mean, think of it this way, Dewey, people are still getting what the things they need. And okay, we do have some money, but, uh, the church does, too, so no-one's really getting hurt an-\n[When they hear a noise outside the door, Malcolm and Reese panic and cover up all the stolen goods.]"
    },
    {
        "show": "How I Met Your Mother",
        "character": "Robin",
        "text": "Future Ted: [v.o.] Kids, this is the story of the night Barney's life completely fell apart.\n[six hours earlier:]\nBarney: My life is finally perfect, and that is never going to change. Fired up for dinner with my mom tonight?\nRobin: Yeah. To help streamline the rest of our lives, you can always assume my answer to that question is no. I'm pretty nervous.\nBarney: Nervous? Why? It's just gonna be two hours of \"I love Barney the most\". \"No, I love Barney the most\".\nRobin: You're right. I may not even get a chance to talk."
    },
    {
        "show": "The Fresh Prince of Bel-Air",
        "character": "Jazz",
        "text": "Will: Hey, Judge.\nPhilip: Now, Will, please. I haven't even announced that I'm running.\nJazz: I don't think you'd have to announce it, Mr. Banks. If you ran, we'd hear you coming.\nPhilip: I'm running for Superior Court Judge.\nJazz: He still could use the exercise."
    },
    {
        "show": "Seinfeld",
        "character": "George",
        "text": "George: [brushing his teeth] What was that all about?\nJerry: Oh, it was just Kramer. Apparently I killed Miss Rhode Island's doves with a bucket of water last night.\nGeorge: Oh. [goes back to the bathroom]"
    },
    {
        "show": "Brooklyn Nine-Nine",
        "character": "Jake",
        "text": "Charles: Jake, what's going on? Why is Amy's hair like that?\nJake: Oh, she obsessively braids her hair when she's nervous, and she's super nervous 'cause she's taking the sergeant's exam today.\nCharles: But Amy loves tests.\nJake: Not this one. It's always been her plan to be the youngest captain in the history of the NYPD, but if she doesn't pass this exam, she's gonna have to wait another three years to take it again, and that'll disrupt her entire life calendar.\nCharles: Is that a real thing?\nJake: It hangs over our bed."
    },
    {
        "show": "The Middle",
        "character": "Bob",
        "text": "Frankie: Okay, not too neat. It's gotta look like an 8-year-old made it.\nBob: Frankie, I took Advanced Charcoal Sketch at the Learning Annex. I can't unteach my hands."
    },
    {
        "show": "How I Met Your Mother",
        "character": "Barney",
        "text": "Barney: I had to look away because if I watched what the paramedics were about to do, I would have passed out. Then they took out this electric blade thing and I kept thinking, \"This isn't happening. This isn't happening. \"\nLily: Oh, my God. What did they cut?\nBarney: My suit. My beautiful suit."
    },
    {
        "show": "Malcolm in the Middle",
        "character": "Spangler",
        "text": "Spangler: I just got a call from the sheriff that a cocksure, smart-mouthed youth looking very much like yourself has been hustling pool at the local bars.\nFrancis: Really, sir?\nSpangler: You are in serious trouble, cadet.\nFrancis: I can explain-\nSpangler: Why have you been holding back when we've played pool?\nFrancis: What?\nSpangler: I want to know why you've been letting me win.\nFrancis: Sir, if I played for real I'd just end up humiliating you in front of the school, and and you'd, you know, torture us all for it. Really, nothing good could come from it, and and besides, winning seems to make you so happy.\nSpangler: I am not a child. Do you really think me so petty that I would throw a tantrum over something so small as a game of pool?!\nFrancis: My mistake, sir.\nSpangler: We are going to play again. And you are going to give me your best game, cadet. And to make sure of that, if you don't win... Picture yourself, 0400, awakened from sweet dreams of Mommy, sent outside into the bitter cold to raise our school colors and stand at attention for three hours until reveille is called. Now, picture that for 230 consecutive days.\nFrancis: But what if I try my best and I still lose?\nSpangler: Then you shall be miserable indeed. Dismissed."
    },
    {
        "show": "How I Met Your Mother",
        "character": "Robin",
        "text": "Robin: Oh, my God. I just want you inside of me."
    },
    {
        "show": "The Middle",
        "character": "Axl",
        "text": "Axl: Check it out. I crushed it at my interview with Mr. Norwood, so I celebrated by buying myself some work duds. [laughs] Oh, look... [pocket watch jostles] It's half past \"I'm awesome.\" [laughs]\nMike: You bought new work clothes before you got the job?\nAxl: You don't buy a suit for the job you have. You buy a suit for whatever job Mr. Norwood's company does.\nFrankie: Well, don't Heck it up. The job's not yours yet.\nAxl: Oh, it will be. When I go after something, I get it. Lifeguarding... \"Here's your whistle.\" Movie theater... \"Welcome to show biz.\" Little Betty? Meet Big Axl."
    },
    {
        "show": "Boy Meets World",
        "character": "Cory",
        "text": "Cory: How do you spell Shawn?\nTopanga: You don't know how to spell your best friend's name?\nCory: We're phone people. Is it S-h-a-w-n or S-h-a-u-n?"
    },
    {
        "show": "Scrubs",
        "character": "Janitor",
        "text": "Ted: [coughing] Oh, good, the piles are getting smaller.\nDr. Kelso: Good. That reminds me. Did you get that sand out of his office?\nJanitor: Yes, I did, and it cut my commute in half.\n[The Janitor has constructed a giant sand castle outside the hospital:]\nJanitor: Good morning, loyal subjects. Enjoy your day in Janitoria. Labor until you tire and then labor some more. Looks like rain. That could be a problem."
    },
    {
        "show": "Friends",
        "character": "Chandler",
        "text": "Monica: You look cute in bubbles.\nChandler: You're just all liquored up.\nJoey: Hey, it's me. I'm coming in.\n[Monica holds her breath, ducks under water]\nChandler: I've had a very long, hard day.\nJoey: I'm going to go get some chicken? Want some?\nChandler: No, thanks. No chicken. Bye-bye then.\nJoey: You sure? Some extra-crispy, dirty rice, beans?\nChandler: For the last time, no. Get out. Get out, Joey!\nJoey: All right.\n[Monica resurfaces]\nChandler: Are you okay? I'm sorry. He wouldn't leave. He kept asking me if I wanted chicken.\nMonica: Chicken? I could eat some chicken.\nChandler: Hey, Joe. [Monica ducks again] Could I get a three-piece, some coleslaw, some beans and a Coke? Aah! Aah! Diet Coke."
    },
    {
        "show": "Gilmore Girls",
        "character": "Lorelai",
        "text": "Andrew: I'd rather have bird crap fall on my head.\nLorelai: There it is. Our new town slogan.\nRory: I like it.\nLorelai: I see coffee mugs, T-shirts.\nRory: Don't forget stuffed shish-kabobbed birds.\nLorelai: That moan when you squeeze 'em."
    },
    {
        "show": "Brooklyn Nine-Nine",
        "character": "Captain Holt",
        "text": "Captain Holt: So I just received word from our friend at the Guffin Foundation. Apparently they loved our video submission. What did you send them?\nGina: A cinematic masterpiece is what I sent them.\nCaptain Holt: Did it feature pizzazz?\nGina: No, none at all, sir. First, I couldn't wrap my head around that concept, but then I realized: do you know which dogs get the most likes on the internet?\nCaptain Holt: Anatolian Shepherds.\nGina: No, ugly little runts with wonky eyes and tongues that won't stay in their mouths.\nCaptain Holt: But the Anatolian Shepherd is unrivaled for protecting livestock."
    },
    {
        "show": "Frasier",
        "character": "Martin",
        "text": "[Martin enters the apartment as Niles' cellphone is ringing]\nMartin: [answering the phone] Hello?\nFrasier: [on his phone] Yes, hello, is Niles Crane there, please?\nMartin: [on the phone] Uh, I don't know, I just got here. Let me go check.\n[Martin goes into the kitchen]\nMartin: Frasier, have you seen Niles?\nFrasier: I'm just trying to reach him, Dad.\nMartin: Oh, okay.\n[Martin returns to the living room]\nMartin: [on the phone] No, I'm sorry, he's not here. But I'll write your name down and give it to him. Uh, wait a minute, I've gotta find a pen.\n[Martin goes to the kitchen again]\nMartin: Frasier, have you seen my-\nFrasier: Dad, please, I'm on the phone.\nMartin: Well, I'm sorry, I was just looking for a pen! Forget it.\n[Martin returns to the living room. Frasier follows him]\nMartin: [on the phone] Hello? Listen, could you maybe call back in an hour? \nFrasier: Dad?\nMartin: Would you mind, please? I'm on the phone!\nFrasier: [on his phone] Dad, it's me.\nMartin: Frasier, why did you call from the kitchen? You could have just walked in here.\nFrasier: Just hang up the phone."
    },
    {
        "show": "Modern Family",
        "character": "Jay",
        "text": "Jay: [answering FaceTime] Hello. Can you see me?\nClaire: Thumb, Dad.\nJay: [groans] The minute they got rid of rotary phones everything went to hell."
    },
    {
        "show": "Scrubs",
        "character": "Carla",
        "text": "Man: Nurse?\nElliot: I'm a doctor, okay? The stethoscope, the beeper, a doctor, got it?\nCarla: Relax.\nElliot: I just hate it. I hate the \"darlings\", I hate the \"sweethearts\".\nCarla: You don't need to tell me how hard it is being a woman here.\nElliot: Well, you're certainly furthering the cause by wearing a thong to work and hooking up in the on-call room. [screeching tires sound] Word gets around.\nCarla: You talk like that, do you even know my name? I spend every second of my life either here or taking care of my mom, so, yeah, maybe I needed a little closeness. I'm sure you never had a quickie at the club, right? Or snuck some skinny, flat-butted college boy up to your sorority room. And my thong? I happen to think it makes my ass look good. And some days, I need to feel good about something. And you judge me? Well, guess what? Word does get around, Ms. Out-For-Herself. So you can dump on everyone here if you want, but you will not hurt me.\nJ.D.: Her name's Carla, by the way."
    },
    {
        "show": "Parks And Recreation",
        "character": "Ron Swanson",
        "text": "Ron Swanson: Is this a hunting game?\nDonna: Yeah, it's fun. You want to play?\nRon Swanson: Indeed, I do. If you'd like, I could offer you some pointers. Hunting, Donna, is about silence, balance, and patience. Get ready. [gunshot effects]\nDonna: You know you're supposed to hit the deer, right?\nRon Swanson: Ugh!\nDonna: Get it together, Swanson.\nRon Swanson: Well, the game is absurd. This gun is lightweight, there's no sight, and we are far too close to these deer. Would they not smell us? I want my money back. How do I get my quarters?\nDonna: Oh, my God! You are such a sore loser.\nRon Swanson: I am not a sore loser. It's just that I prefer to win, and when I don't, I get furious. Employee!"
    },
    {
        "show": "Parks And Recreation",
        "character": "Ron Swanson",
        "text": "Ron Swanson: Is this all the eggs we have?\nTom: Yes. What are you making?\nRon Swanson: Eggs."
    },
    {
        "show": "Modern Family",
        "character": "Jay",
        "text": "Jay: Not gonna help, kid.\nAlex: You're right. I can't drown my problems in alcohol.\nJay: Well, you can, but that's water. You're not really gonna turn down Caltech?\nAlex: Oh, please don't tell me what a great school it is how I'm gonna graduate in two years and they're gonna name a country after me.\nJay: You're feeling some pressure.\nAlex: What if I'm the dumbest one there? Someone has to be. I could get there, be dumb, have a nervous breakdown-\nJay: Hey, you're going. I know you. You've never backed down from a challenge your whole life. Now I could lie to you and tell you it's gonna be easy.\nAlex: Well, do that. I'm vulnerable. I'll believe you.\nJay: It's not. It's gonna be hard. But you and I both know this is something you have to do.\nAlex: 'Cause if I don't, I'll regret it my whole life. I know, I know.\nJay: Yeah, that's part of it. Let's take a ride. Want to show you something.\nAlex: You're not gonna drive me into a bad neighborhood to show me how lucky I am, are you?"
    },
    {
        "show": "The Golden Girls",
        "character": "Sophia",
        "text": "Blanche: I'm not giving Fidel up, Sophia.\nSophia: [downbeat] I am. I'm fighting a losing battle. You're younger, prettier. In the end, he'll choose you and it'll break my heart. He's yours, Blanche. No hard feelings.\nBlanche: Oh, Sophia, wait. Why don't you take Fidel? I have all those other boyfriends.\nSophia: [cheerily] OK! Good night!\nBlanche: Sophia! Sophia!"
    },
    {
        "show": "Parks And Recreation",
        "character": "Ron Swanson",
        "text": "April: Hey, if you see Andy, will you not tell him I'm here?\nRon Swanson: Okay.\nApril: Because of what happened, I don't want him to think...\nRon Swanson: Stop. Don't want to know.\n[aside to camera:]\nRon Swanson: The less I know about other people's affairs, the happier I am. I'm not interested in caring about people. I once worked with a guy for three years and never learned his name. Best friend I ever had. We still never talk sometimes."
    },
    {
        "show": "Frasier",
        "character": "Frasier",
        "text": "Roz: So what's the plan? Are we going to turn off the lights and jump out and yell \"surprise!\"\nFrasier: Oh yes, Roz, let's startle a man who just had open-heart surgery."
    },
 
];