import List from "./components/List";

function App() {
  return (
    <div className="todo__wrapper">
      <div className="todo">
        <div className="todo__sidebar">
          <List
            items={[
              {
                icon: (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.33325 6.66668H4.66658C5.99992 6.66668 6.66658 6.00001 6.66658 4.66668V3.33334C6.66658 2.00001 5.99992 1.33334 4.66658 1.33334H3.33325C1.99992 1.33334 1.33325 2.00001 1.33325 3.33334V4.66668C1.33325 6.00001 1.99992 6.66668 3.33325 6.66668Z"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.3333 6.66668H12.6666C13.9999 6.66668 14.6666 6.00001 14.6666 4.66668V3.33334C14.6666 2.00001 13.9999 1.33334 12.6666 1.33334H11.3333C9.99992 1.33334 9.33325 2.00001 9.33325 3.33334V4.66668C9.33325 6.00001 9.99992 6.66668 11.3333 6.66668Z"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.3333 14.6667H12.6666C13.9999 14.6667 14.6666 14 14.6666 12.6667V11.3333C14.6666 10 13.9999 9.33334 12.6666 9.33334H11.3333C9.99992 9.33334 9.33325 10 9.33325 11.3333V12.6667C9.33325 14 9.99992 14.6667 11.3333 14.6667Z"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.33325 14.6667H4.66658C5.99992 14.6667 6.66658 14 6.66658 12.6667V11.3333C6.66658 10 5.99992 9.33334 4.66658 9.33334H3.33325C1.99992 9.33334 1.33325 10 1.33325 11.3333V12.6667C1.33325 14 1.99992 14.6667 3.33325 14.6667Z"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
                name: "Все задачи",
                active: false,
              },
            ]}

          />
          <List
            items={[
              {
                color: 'green',
                name: "Покупки",
                active: false,
              },
              {
                color: 'blue',
                name: "Фронтенд",
                active: false,
              },
              {
                color: 'pink',
                name: "Фильмы и сериалы",
                active: true,
              },
            ]}
          />
        </div>
        <div className="tod__tasks">dfdff</div>
      </div>
    </div>
  );
}

export default App;
