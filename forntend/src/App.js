import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import Signup from './components/signup';
import Dashboard from './components/Dashboard';
import GamifiedLearning from './components/GamifiedLearning';
import Roadmap from './components/roadmap';
import Problem from './components/problem';
import Python from './components/python/PythonConcepts';
import Web from './components/web/Webconcepts';
import  Dbms from './components/dbms/dbmsconcept';
import BootstrapArena from './components/web/BootstrapArena';
import CSSAnimationArena from './components/web/CSSAnimationArena';
import FlexboxBuilder from './components/web/FlexboxBuilder';
import TagBuilder from './components/web/TagBuilder';
import FormFighter from './components/web/FormFighter';
import StyleSprintGame from './components/web/StyleSprintGame';
import CodeCraft from './components/web/CodeCraft';
import ReactReactorGame from './components/web/ReactReactorGame';
import MongoPlayground from './components/web/MongoPlayground';
import NodeJsTerminalSimulation from './components/web/NodeJsTerminalSimulation';
import Strings from './components/python/PythonStrings';
import FileHandlingGame from './components/python/FileHandlingGame';
import PythonDataTypeMatchGame from './components/python/PythonDataTypeMatchGame';
import MazeEscapeGame from './components/python/MazeEscapeGame';
import FixFunctionGame from './components/python/FixFunctionGame';
import IfElseStoryGame from './components/python/IfElseStoryGame';
import SortGame from './components/python/SortGame';
import OperatorsPuzzle from './components/python/OperatorsPuzzle';
import CharacterBuilder from './components/python/CharacterBuilder';
import TreasureHunt from './components/python/TreasureHunt';
import PythonModulesGame from './components/python/PythonModulesGame';
import InterviewPrep from './components/InterviewPrep';
import GDPage from './components/GD/GDPage';
import Chatbot from './components/Chatbot';

import AptitudePage from './components/aptitude/AptitudePage';
import OS from './components/os/osconcept';
import Boot from './components/os/boot';
import Deadlock from './components/os/deadlock';
import Multithreading from './components/os/multithrading';
import OSBASICS from './components/os/osbasics';
import OSsecurity from './components/os/ossecurity';
import Pagging from './components/os/Pagging';
import Processscdeuling from './components/os/procsessscheduling';
import Thread from './components/os/thread';
import Kernal from './components/os/kernal';
import Network from './components/network/networkconcepts';
import DNS from './components/network/dns';
import HTTP from './components/network/http';
import IP from './components/network/ip';
import MAC from './components/network/mac';
import NetworkDevice from './components/network/networkdevice';
import OSI from './components/network/osi';
import Routers from './components/network/router';
import TCP from './components/network/tcp';
import Topology from './components/network/topology';
import Acid from './components/dbms/acid';
import Dbmsbasics from './components/dbms/dbmsbasics';
import Er from './components/dbms/er';
import Normalization from './components/dbms/normalization';
import Relation from './components/dbms/relation';
import Sqljoins from './components/dbms/sqljoins';
import Sqlquery from './components/dbms/sqlquery';
import Subquery from './components/dbms/subquery';
import Trigger from'./components/dbms/trigger';
import Aiml from './components/aiml/aimlconcepts';
import Accuracy from './components/aiml/accuarcy';
import Aimlbasics from './components/aiml/aimlbasics';
import Classification from './components/aiml/classification';
import Dataset from './components/aiml/dataset';
import Nueral from './components/aiml/nueral';
import Spam from './components/aiml/spam';
import Supervised from './components/aiml/supervised';
import Training from './components/aiml/training';
import Javaconcepts from './components/java/javaconcepts';
import Abstraction from './components/java/abstarction';
import Class from './components/java/class';
import Encapsulation from './components/java/encapsulation';
import Inheritence from './components/java/inheritence';
import Javaarray from './components/java/javaarray';
import Javabasics from './components/java/javabasics';
import Javacore from './components/java/javacore';
import Javafinal from './components/java/javafinal';
import Methods from './components/java/methods';
import Polymorpishm from './components/java/polymorpishm';
import NumberSystem from './components/aptitude/NumberSystem';
import LCMHCF from './components/aptitude/LCM_HCF';
import Simplification from './components/aptitude/Simplification';
import SurdsIndices from './components/aptitude/SurdsAndIndices';
import Average from './components/aptitude/Average';
import Percentage from './components/aptitude/Percentage';
import ProfitLoss from './components/aptitude/ProfitAndLoss';
import SimpleInterest from './components/aptitude/SimpleInterest';
import CompoundInterest from './components/aptitude/CompoundInterest';
import RatioProportion from './components/aptitude/RatioAndProportion';
import Partnership from './components/aptitude/Partnership';
import MixtureAlligation from './components/aptitude/MixtureAndAlligation';
import TimeWork from './components/aptitude/TimeAndWork';
import PipesCisterns from './components/aptitude/PipesAndCisterns';
import TimeSpeedDistance from './components/aptitude/TimeSpeedDistance';
import ProblemsTrains from './components/aptitude/ProblemsOnTrains';
import BoatsStreams from './components/aptitude/BoatsAndStreams';
import Mensuration from './components/aptitude/Mensuration';
import AreaVolumePerimeter from './components/aptitude/AreaVolumePerimeter';
import ProblemsAges from './components/aptitude/ProblemsOnAges';
import Calendar from './components/aptitude/Calendar';
import Clock from './components/aptitude/Clock';
import NumberSeries from './components/aptitude/NumberSeries';
import AlphabetSeries from './components/aptitude/AlphabetSeries';
import CodingDecoding from './components/aptitude/CodingDecoding';
import Analogy from './components/aptitude/Analogy';
import BloodRelations from './components/aptitude/BloodRelations';
import DirectionSense from './components/aptitude/DirectionSense';
import SeatingArrangement from './components/aptitude/SeatingArrangement';
import Puzzles from './components/aptitude/Puzzles';
import Syllogism from './components/aptitude/Syllogism';
import StatementsAssumptions from './components/aptitude/StatementsAndAssumptions';
import StatementsConclusions from './components/aptitude/StatementsAndConclusions';
import CauseEffect from './components/aptitude/CauseAndEffect';
import LogicalReasoning from './components/aptitude/LogicalReasoning';
import Minigames from './components/minigames';
import PermutationsCombinations from './components/aptitude/PermutationsAndCombinations';
import Probability from './components/aptitude/Probability';
import Interviewnext from './components/interview/interviewnextpage';
import Aptitudequestion from './components/aptitude/apptitudequestions';
import Game2048 from './components/games/game2048';
import Tetris from './components/games/tetris';
import Binarygame from './components/games/binarygame';
import Black from './components/games/black';
import Simon from './components/games/simon';
import Space from './components/games/space';
import Airoadmap from './components/roadmap/airoadmap';
import Dataaroadmap from './components/roadmap/dataa';
import Datasroadmap from './components/roadmap/datas';
import Webdroadmap from './components/roadmap/webd';
import Cyberroadmap from './components/roadmap/cyber';
import IntervalProblem from "./components/problem-solving/IntervalProblem";
import Backtracking from "./components/problem-solving/Backtracking";
import GreedyAlgorithm from "./components/problem-solving/GreedyAlgorithm";
import AdvancedProblemPatterns from "./components/problem-solving/AdvancedProblemPatterns";
import DPBitManipulatio from "./components/problem-solving/DPBitManipulatio";
import DPSubsetsBitmas from "./components/problem-solving/DPSubsetsBitmas";
import DP2DExamples from "./components/problem-solving/DP2DExamples";
import DP1DExamples from "./components/problem-solving/DP1DExamples";
import GraphAlgorithms from "./components/problem-solving/GraphAlgorithms";
import GraphAlgorithms1 from "./components/problem-solving/GraphAlgorithms1";
import GraphTraversal from "./components/problem-solving/GraphTraversal";
import GraphRepresentations from "./components/problem-solving/GraphRepresentations";
import SegmentFenwickTrees from "./components/problem-solving/SegmentFenwickTrees";
import DisjointSetUnio from "./components/problem-solving/DisjointSetUnio";
import HeapPriorityQueu from "./components/problem-solving/HeapPriorityQueu";
import TreeExamples from "./components/problem-solving/TreeExamples";
import StacksQueuesLinkedLists from "./components/problem-solving/StacksQueuesLinkedLists";
import DataStructures from "./components/problem-solving/DataStructures";
import BitManipulation from "./components/problem-solving/BitManipulation";
import MathematicalThinking from "./components/problem-solving/MathematicalThinking";
import RecursionBacktracking from "./components/problem-solving/RecursionBacktracking";
import SortingAndStackProblems from "./components/problem-solving/SortingAndStackProblems";
import HashingForLooku from "./components/problem-solving/HashingForLooku";
import ProblemSolvingPatterns from "./components/problem-solving/ProblemSolvingPatterns";
import PatternMatchingAlgorithms from "./components/problem-solving/PatternMatchingAlgorithms";
import StringManipulationAdvanced from "./components/problem-solving/StringManipulationAdvanced";
import StringManipulation from "./components/problem-solving/StringManipulation";
import ArrayOperations from "./components/problem-solving/ArrayOperations";
import PrefixSuffixSum from "./components/problem-solving/PrefixSuffixSum";
import ArrayStringTechniques from "./components/problem-solving/ArrayStringTechniques";
import MathBasedProblem from "./components/problem-solving/MathBasedProblem";
import ArraysAndListsTutorial from "./components/problem-solving/ArraysAndListsTutorial";
import PatternPrintingTutorial from "./components/problem-solving/PatternPrintingTutorial";
import StringManipulationTutorial from "./components/problem-solving/StringManipulationTutorial";
import SearchAlgorithmsTutorial from "./components/problem-solving/SearchAlgorithmsTutorial";
import StacksQueuesTutorial from "./components/problem-solving/StacksQueuesTutorial";
import FunctionsAndModularProgramming from "./components/problem-solving/FunctionsAndModularProgramming";
import ConditionalsAndLoops from "./components/problem-solving/ConditionalsAndLoops";
import ProgrammingBasic from "./components/problem-solving/ProgrammingBasic";
import ProblemAnalysisLesson from "./components/problem-solving/ProblemAnalysisLesson";
import LearnProblemSolving from "./components/problem-solving/LearnProblemSolving";
import  ProblemList   from "./components/problem-solving/ProblemList";
import Notes from "./components/notes";
import Quiz from "./components/quiz";
import Discuss from "./components/dicuss";
import Leader from "./components/leader";
import EnglishConcepts from "./components/english/english";
import ArticleGame from "./components/english/article";
import DirectSpeechGame from"./components/english/direct";
const App = () => {

  return (
  
      <Routes>
<Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
<Route path="/login" element={<Login />} />
<Route path="/signup" element={<Signup />} />
<Route path="/notes" element={<Notes />} />
<Route path="/cs-quiz" element={<Quiz />} />
<Route path="/leaderboard" element={<Leader />} />
<Route path="/discussion-forum" element={<Discuss />} />
        <Route path="/gamified-learning" element={<GamifiedLearning />} />
<Route path="/problem-solving" element={<Problem />} />
        <Route path="/GamifiedLearning/python" element={<Python />} />
       <Route path="/GamifiedLearning/os" element={<OS />} />
   <Route path="/GamifiedLearning/networking" element={<Network />} />
 <Route path="/GamifiedLearning/aiml" element={<Aiml/>} />
<Route path="/GamifiedLearning/dbms" element={<Dbms />} />
<Route path="/GamifiedLearning/java" element={<Javaconcepts />} />   
     <Route path="/GamifiedLearning/web/*" element={<Web />}/>
          <Route path="/gamifiedlearning/web/bootstrap" element={<BootstrapArena />} />
           <Route path="/gamifiedlearning/web/cssanimation" element={<CSSAnimationArena />} />
           <Route path="/gamifiedlearning/web/html" element={<TagBuilder />} />
           <Route path="/gamifiedlearning/web/cssgrid" element={<FlexboxBuilder/>} />
           <Route path="/gamifiedlearning/web/cssstyle" element={<StyleSprintGame/>} />
          <Route path="/gamifiedlearning/web/form" element={<FormFighter/>} />
        <Route path="/gamifiedlearning/web/javascript" element={<CodeCraft/>}/>
      <Route path="/gamifiedlearning/web/node" element={<NodeJsTerminalSimulation />}/>      
  <Route path="/gamifiedlearning/web/react" element={<ReactReactorGame/>}/> 
 <Route path="/gamifiedlearning/web/mongodb" element={<MongoPlayground/>}/>                                               
        <Route path="/gamified/python/strings" element={<Strings />} />
<Route path="/gamified/python/loops" element={<MazeEscapeGame />} />
<Route path="/gamified/python/files" element={<FileHandlingGame />} />  
<Route path="/gamified/python/modules" element={<PythonModulesGame />} /> 
<Route path="/gamified/python/functions" element={<FixFunctionGame />} />        
<Route path="/gamified/python/datatypes" element={<PythonDataTypeMatchGame />} />
<Route path="/gamified/python/ifs" element={<IfElseStoryGame />} />  
<Route path="/gamified/python/operators" element={<OperatorsPuzzle />} /> 
<Route path="/gamified/python/classes" element={<CharacterBuilder />} /> 
<Route path="/gamified/python/sets" element={<TreasureHunt />} /> 
<Route path="/gamified/python/lists" element={<SortGame />} />
<Route path="/gamified/os/boot" element={<Boot />} />         
<Route path="/gamified/os/deadlock" element={<Deadlock />} /> 
<Route path="/gamified/os/multithreading" element={<Multithreading />} /> 
<Route path="/gamified/os/os-basics" element={<OSBASICS />} /> 
<Route path="/gamified/os/os-security" element={<OSsecurity/>} />
<Route path="/gamified/os/paging" element={<Pagging/>} /> 
<Route path="/gamified/os/process-scheduling" element={<Processscdeuling/>} /> 
<Route path="/gamified/os/thread" element={<Thread/>} /> 
<Route path="/gamified/os/kernel" element={<Kernal/>} /> 
<Route path="/gamified/networking/dns" element={<DNS/>} />
<Route path="/gamified/networking/http" element={<HTTP/>} />
<Route path="/gamified/networking/ip" element={<IP/>} />
 <Route path="/gamified/networking/mac" element={<MAC/>} />
<Route path="/gamified/networking/osi" element={<OSI/>} />
<Route path="/gamified/networking/router" element={<Routers/>} />
 <Route path="/gamified/networking/networkdevice" element={<NetworkDevice/>} />
 <Route path="/gamified/networking/tcp" element={<TCP/>} />
<Route path="/gamified/networking/topology" element={<Topology/>} />
<Route path="/gamified/dbms/acid" element={<Acid />} />
<Route path="/gamified/dbms/dbms-basics" element={<Dbmsbasics/>} />
<Route path="/gamified/dbms/er" element={<Er/>} />
<Route path="/gamified/dbms/normalization" element={<Normalization/>} />
<Route path="/gamified/dbms/relation" element={<Relation/>} />
<Route path="/gamified/dbms/sql-joins" element={<Sqljoins/>} />
<Route path="/gamified/dbms/sql-query" element={<Sqlquery/>} />
<Route path="/gamified/dbms/subquery" element={<Subquery/>} />
<Route path="/gamified/dbms/trigger" element={<Trigger/>} />
<Route path="/gamified/aiml/accuracy" element={<Accuracy/>} />
<Route path="/gamified/aiml/aiml-basics" element={<Aimlbasics/>} />
<Route path="/gamified/aiml/classification" element={<Classification/>} />
<Route path="/gamified/aiml/dataset" element={<Dataset/>} />
<Route path="/gamified/aiml/neural" element={<Nueral/>} />
<Route path="/gamified/aiml/spam" element={<Spam/>} />
<Route path="/gamified/aiml/supervised-learning" element={<Supervised/>} />
<Route path="/gamified/aiml/training" element={<Training/>} />
<Route path="/gamified/java/abstraction" element={<Abstraction/>} />
<Route path="/gamified/java/class" element={<Class/>} />
<Route path="/gamified/java/encapsulation" element={<Encapsulation/>} />
<Route path="/gamified/java/inheritance" element={<Inheritence/>} />
<Route path="/gamified/java/java-array" element={<Javaarray/>} />
<Route path="/gamified/java/java-basics" element={<Javabasics/>} />
<Route path="/gamified/java/java-core" element={<Javacore/>} />
<Route path="/gamified/java/java-final" element={<Javafinal/>} />
<Route path="/gamified/java/methods" element={<Methods/>} />
<Route path="/gamified/java/polymorphism" element={<Polymorpishm/>} />
 <Route path="/interview-prep" element={<InterviewPrep />} />
<Route path="/mini-games" element={<Minigames />}/>   
<Route path="/mini-games/game2048" element={<Game2048 />}/>    
  <Route path="/interview-prep/gd" element={<GDPage />} />
        
        <Route path="/interview-prep/interviewnext" element={<Interviewnext />} />
        <Route path="/GamifiedLearning/aptitude" element={<AptitudePage />} />
<Route path="/gamified/aptitude/number-system" element={<NumberSystem />} />
<Route path="/gamified/aptitude/lcm-hcf" element={<LCMHCF />} />
<Route path="/gamified/aptitude/simplification" element={<Simplification />} />
<Route path="/gamified/aptitude/surds-indices" element={<SurdsIndices />} />
<Route path="/gamified/aptitude/average" element={<Average />} />
<Route path="/gamified/aptitude/percentage" element={<Percentage />} />
<Route path="/gamified/aptitude/profit-loss" element={<ProfitLoss />} />
<Route path="/gamified/aptitude/simple-interest" element={<SimpleInterest />} />
<Route path="/gamified/aptitude/compound-interest" element={<CompoundInterest />} />
<Route path="/gamified/aptitude/ratio-proportion" element={<RatioProportion />} />
<Route path="/gamified/aptitude/partnership" element={<Partnership />} />
<Route path="/gamified/aptitude/mixture-alligation" element={<MixtureAlligation />} />
<Route path="/gamified/aptitude/time-work" element={<TimeWork />} />
<Route path="/gamified/aptitude/pipes-cisterns" element={<PipesCisterns />} />
<Route path="/gamified/aptitude/time-speed-distance" element={<TimeSpeedDistance />} />
<Route path="/gamified/aptitude/problems-trains" element={<ProblemsTrains />} />
<Route path="/gamified/aptitude/boats-streams" element={<BoatsStreams />} />
<Route path="/gamified/aptitude/mensuration" element={<Mensuration />} />
<Route path="/gamified/aptitude/area-volume-perimeter" element={<AreaVolumePerimeter />} />
<Route path="/gamified/aptitude/problems-ages" element={<ProblemsAges />} />
<Route path="/gamified/aptitude/calendar" element={<Calendar />} />
<Route path="/gamified/aptitude/clock" element={<Clock />} />
<Route path="/gamified/aptitude/number-series" element={<NumberSeries />} />
<Route path="/gamified/aptitude/alphabet-series" element={<AlphabetSeries />} />
<Route path="/gamified/aptitude/coding-decoding" element={<CodingDecoding />} />
<Route path="/gamified/aptitude/analogy" element={<Analogy />} />
<Route path="/gamified/aptitude/blood-relations" element={<BloodRelations />} />
<Route path="/gamified/aptitude/direction-sense" element={<DirectionSense />} />
<Route path="/gamified/aptitude/seating-arrangement" element={<SeatingArrangement />} />
<Route path="/gamified/aptitude/puzzles" element={<Puzzles />} />
<Route path="/gamified/aptitude/syllogism" element={<Syllogism />} />
<Route path="/gamified/aptitude/statements-assumptions" element={<StatementsAssumptions />} />
<Route path="/gamified/aptitude/statements-conclusions" element={<StatementsConclusions />} />
<Route path="/gamified/aptitude/cause-effect" element={<CauseEffect />} />
<Route path="/gamified/aptitude/logical-reasoning" element={<LogicalReasoning />} />
<Route path="/gamified/aptitude/permutations-combinations" element={<PermutationsCombinations />} />
<Route path="/gamified/aptitude/probability" element={<Probability />} />
<Route path="/roadmap" element={<Roadmap />}/>
{/* Interview Prep Section */}
        <Route path="/interview-prep" element={<InterviewPrep />} />
        <Route path="/interview-prep/gd" element={<GDPage />} />
        <Route path="/interview-prep/interviewnext" element={<Interviewnext />} />
        <Route path="/interview-prep/aptitude" element={<AptitudePage />} />
         <Route path="/interview-prep/aptitude-questions" element={<Aptitudequestion />} />      
<Route path="/mini-games/tetris" element={<Tetris />}/>    
<Route path="/mini-games/binarygame" element={<Binarygame />}/>
<Route path="/mini-games/black" element={<Black/>}/>
<Route path="/mini-games/simon" element={<Simon/>}/>
<Route path="/mini-games/spaceinvader" element={<Space/>}/>
<Route path="/road-map/airoadmap" element={<Airoadmap/>}/>
<Route path="/road-map/dataaroadmap" element={<Dataaroadmap/>}/>
<Route path="/road-map/datasroadmap" element={<Datasroadmap/>}/>
<Route path="/road-map/webdroadmap" element={<Webdroadmap/>}/>
<Route path="/road-map/cyberroadmap" element={<Cyberroadmap/>}/>
        <Route path="/problem-solving/IntervalProblem" element={<IntervalProblem />} />
        <Route path="/problem-solving/Backtracking" element={<Backtracking />} />
        <Route path="/problem-solving/GreedyAlgorithm" element={<GreedyAlgorithm />} />
        <Route path="/problem-solving/AdvancedProblemPatterns" element={<AdvancedProblemPatterns />} />
        <Route path="/problem-solving/DPBitManipulatio" element={<DPBitManipulatio />} />
        <Route path="/problem-solving/DPSubsetsBitmas" element={<DPSubsetsBitmas />} />
        <Route path="/problem-solving/DP2DExamples" element={<DP2DExamples />} />
        <Route path="/problem-solving/DP1DExamples" element={<DP1DExamples />} />
        <Route path="/problem-solving/GraphAlgorithms" element={<GraphAlgorithms />} />
        <Route path="/problem-solving/GraphAlgorithms1" element={<GraphAlgorithms1 />} />
        <Route path="/problem-solving/GraphTraversal" element={<GraphTraversal />} />
        <Route path="/problem-solving/GraphRepresentations" element={<GraphRepresentations />} />
        <Route path="/problem-solving/SegmentFenwickTrees" element={<SegmentFenwickTrees />} />
        <Route path="/problem-solving/DisjointSetUnio" element={<DisjointSetUnio />} />
        <Route path="/problem-solving/HeapPriorityQueu" element={<HeapPriorityQueu />} />
        <Route path="/problem-solving/TreeExamples" element={<TreeExamples />} />
        <Route path="/problem-solving/StacksQueuesLinkedLists" element={<StacksQueuesLinkedLists />} />
        <Route path="/problem-solving/DataStructures" element={<DataStructures />} />
        <Route path="/problem-solving/BitManipulation" element={<BitManipulation />} />
        <Route path="/problem-solving/MathematicalThinking" element={<MathematicalThinking />} />
        <Route path="/problem-solving/RecursionBacktracking" element={<RecursionBacktracking />} />
        <Route path="/problem-solving/SortingAndStackProblems" element={<SortingAndStackProblems />} />
        <Route path="/problem-solving/HashingForLooku" element={<HashingForLooku />} />
        <Route path="/problem-solving/ProblemSolvingPatterns" element={<ProblemSolvingPatterns />} />
        <Route path="/problem-solving/PatternMatchingAlgorithms" element={<PatternMatchingAlgorithms />} />
        <Route path="/problem-solving/StringManipulationAdvanced" element={<StringManipulationAdvanced />} />
        <Route path="/problem-solving/StringManipulation" element={<StringManipulation />} />
        <Route path="/problem-solving/ArrayOperations" element={<ArrayOperations />} />
        <Route path="/problem-solving/PrefixSuffixSum" element={<PrefixSuffixSum />} />
        <Route path="/problem-solving/ArrayStringTechniques" element={<ArrayStringTechniques />} />
        <Route path="/problem-solving/MathBasedProblem" element={<MathBasedProblem />} />
        <Route path="/problem-solving/ArraysAndListsTutorial" element={<ArraysAndListsTutorial />} />
        <Route path="/problem-solving/PatternPrintingTutorial" element={<PatternPrintingTutorial />} />
        <Route path="/problem-solving/StringManipulationTutorial" element={<StringManipulationTutorial />} />
        <Route path="/problem-solving/SearchAlgorithmsTutorial" element={<SearchAlgorithmsTutorial />} />
        <Route path="/problem-solving/StacksQueuesTutorial" element={<StacksQueuesTutorial />} />
        <Route path="/problem-solving/FunctionsAndModularProgramming" element={<FunctionsAndModularProgramming />} />
        <Route path="/problem-solving/ConditionalsAndLoops" element={<ConditionalsAndLoops />} />
        <Route path="/problem-solving/ProgrammingBasic" element={<ProgrammingBasic />} />
        <Route path="/problem-solving/ProblemAnalysisLesson" element={<ProblemAnalysisLesson />} />
        <Route path="/problem-solving/LearnProblemSolving" element={<LearnProblemSolving />} />
         <Route path="/problem-solving/ProblemList" element={<ProblemList />}/>
 
<Route path="/GamifiedLearning/english" element={<EnglishConcepts />} />
<Route path="/gamified/english/article" element={<ArticleGame />} />
<Route path="/gamified/english/direct-speech" element={<DirectSpeechGame />} />
</Routes>

      {/* Global chatbot */}
      <Chatbot />
   
  );
};

export default App;
