import Form from "./Form/index";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Container from "../../common/Container";
import Header from "../../common/Header";

// import Search from "./Search";
import ExampleTasksButton from "./ExampleTasksButton";
// import ErrorModal from "./ErrorModal";
// import { useSelector } from "react-redux";
// import { selectError } from "../tasksSlice";

function TasksPage() {
  //   const error = useSelector(selectError);

  return (
    <Container>
      <>
        <Header title="Lista zadań" />
        <Section
          title="Dodaj nowe zadanie"
          extraHeaderContent={<ExampleTasksButton />}
          body={<Form />}
        />
        {/* <Section
            title="Wyszuiwarka"
            body={<Search title="Filtruj zadania" />}
          /> */}
        <Section
          title="Lista zadań"
          extraHeaderContent={<Buttons />}
          body={<TaskList />}
        />
      </>
    </Container>
  );
}

export default TasksPage;
