import Form from "./Form/index";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import Search from "./Search";
import FetchExampleTasksButton from "./FetchExampleTasksButton";

const TasksPage = () => {
  return (
    <Container>
      <Header title="Lista zadań  " />
      <Section
        title="Dodaj nowe zadanie"
        extraHeaderContent={<FetchExampleTasksButton />}
        body={<Form />}
      />
      <Section title="Wyszukiwarka" body={<Search />} />
      <Section
        title="Lista zadań"
        extraHeaderContent={<Buttons />}
        body={<TaskList />}
      />
    </Container>
  );
};

export default TasksPage;
