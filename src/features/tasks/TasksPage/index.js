import { useSelector } from "react-redux";
import { selectError } from "../tasksSlice";
import Form from "./Form/index";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";

import FetchExampleTasksButton from "./FetchExampleTasksButton";
import ErrorModal from "./ErrorModal";
import Search from "./Search";

const TasksPage = () => {
  const error = useSelector(selectError);

  return (
    <Container>
      {error ? (
        <Section title="Wykryto błąd" body={<ErrorModal />} />
      ) : (
        <>
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
        </>
      )}
    </Container>
  );
};

export default TasksPage;
