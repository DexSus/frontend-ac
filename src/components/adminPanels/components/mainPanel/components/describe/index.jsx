import React, { useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table } from "antd";
import Highlighter from "react-highlight-words";

export const ViewPanel = ({ onPanelChange }) => {

    const data = [
        {
          key: "1",
          organization: "Військова частина А1234",
          person: "Петренко Андрій Миколайович",
          source: "Веб Сайт",
          location: "Київ",
          status: "Нове",
          details: "Начальник військової частини А1234 запропонував мені 300$ за те, що я, як начальник РАО, спишу 2 ящика БК, як наслідок пожежі на складі. Звіт аудиту та Фото доказу додаються.",
          files: [
            { name: "Звіт аудиту", url: "/files/report.pdf" },
            { name: "Фото доказу", url: "/files/evidence.jpg" },
          ]
        },
        {
          key: "2",
          organization: "Військова частина Б5678",
          person: "Сидоренко Олег Володимирович",
          source: "Telegram",
          location: "Львів",
          status: "В обробці",
          details: "Командир військової частини Б5678 запропонував мені вирішити питання з постачанням паливно-мастильних матеріалів без тендера за певну винагороду. Звіт аудиту та Фото доказу додаються.",
          files: [
            { name: "Звіт аудиту", url: "/files/report.pdf" },
            { name: "Фото доказу", url: "/files/evidence.jpg" },
          ]
        },
        {
          key: "3",
          organization: "Військова частина В9101",
          person: "Коваленко Світлана Олексіївна",
          source: "WatsApp",
          location: "Харків",
          status: "Закрито",
          details: "Під час перевірки виявлено, що співробітники військової частини В9101 використовували службову техніку для особистих потреб. Звіт аудиту та Фото доказу додаються.",
          files: [
            { name: "Звіт аудиту", url: "/files/report.pdf" },
            { name: "Фото доказу", url: "/files/evidence.jpg" },
          ]
        },
        {
          key: "4",
          organization: "Військова частина Г1122",
          person: "Лисенко Вікторія Сергіївна",
          source: "WatsApp",
          location: "Одеса",
          status: "Нове",
          details: "Командир частини Г1122 запропонував мені закрити очі на порушення в бухгалтерії за умови співпраці. Звіт аудиту та Фото доказу додаються.",
          files: [
            { name: "Звіт аудиту", url: "/files/report.pdf" },
            { name: "Фото доказу", url: "/files/evidence.jpg" },
          ]
        },
        {
          key: "5",
          organization: "Військова частина Д3344",
          person: "Дмитренко Іван Сергійович",
          source: "Веб Сайт",
          location: "Дніпро",
          status: "Розглядається",
          details: "Командир частини Д3344 намагався здійснити вплив на рішення щодо постачання медикаментів в частину за вигіднішими умовами для певного постачальника. Звіт аудиту та Фото доказу додаються.",
          files: [
            { name: "Звіт аудиту", url: "/files/report.pdf" },
            { name: "Фото доказу", url: "/files/evidence.jpg" },
          ]
        },
        {
          key: "6",
          organization: "Військова частина Е5566",
          person: "Захарченко Олександр Іванович",
          source: "Telegram",
          location: "Запоріжжя",
          status: "Закрито",
          details: "У військовій частині Е5566 було виявлено неправомірні дії при закупівлі запчастин для техніки, де було задіяно службові кошти. Звіт аудиту та Фото доказу додаються.",
          files: [
            { name: "Звіт аудиту", url: "/files/report.pdf" },
            { name: "Фото доказу", url: "/files/evidence.jpg" },
          ]
        },
        {
          key: "7",
          organization: "Військова частина Ж7788",
          person: "Іванчук Марія Григорівна",
          source: "WatsApp",
          location: "Київ",
          status: "В обробці",
          details: "Під час обстеження військової частини Ж7788 було виявлено значні порушення при складанні звітів про використання паливно-мастильних матеріалів. Звіт аудиту та Фото доказу додаються.",
          files: [
            { name: "Звіт аудиту", url: "/files/report.pdf" },
            { name: "Фото доказу", url: "/files/evidence.jpg" },
          ]
        },
        {
          key: "8",
          organization: "Військова частина З9900",
          person: "Ковальчук Юрій Володимирович",
          source: "Telegram",
          location: "Луцьк",
          status: "Нове",
          details: "Начальник військової частини З9900 намагався маніпулювати даними під час перевірки щодо витрат на обслуговування техніки. Звіт аудиту та Фото доказу додаються.",
          files: [
            { name: "Звіт аудиту", url: "/files/report.pdf" },
            { name: "Фото доказу", url: "/files/evidence.jpg" },
          ]
        },
        {
          key: "9",
          organization: "Військова частина И1122",
          person: "Семенюк Ірина Валентинівна",
          source: "Веб Сайт",
          location: "Миколаїв",
          status: "Розглядається",
          details: "Під час перевірки було виявлено, що співробітники військової частини И1122 використовували спеціальні ресурси для приватних цілей, що є порушенням. Звіт аудиту та Фото доказу додаються.",
          files: [
            { name: "Звіт аудиту", url: "/files/report.pdf" },
            { name: "Фото доказу", url: "/files/evidence.jpg" },
          ]
        },
        {
          key: "10",
          organization: "Військова частина І3344",
          person: "Гончаренко Михайло Андрійович",
          source: "Telegram",
          location: "Чернігів",
          status: "В обробці",
          details: "Командир військової частини І3344 пропонував мені заплатити хабар за те, щоб не виявляти порушення в звіті про використання бюджетних коштів. Звіт аудиту та Фото доказу додаються.",
          files: [
            { name: "Звіт аудиту", url: "/files/report.pdf" },
            { name: "Фото доказу", url: "/files/evidence.jpg" },
          ]
        }
      ];
      

  const [selectedComplaint, setSelectedComplaint] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90, backgroundColor: "#4D3E34" }}
          >
            Пошук
          </Button>

          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90, color: "#4D3E34", fontSize: "15px" }}
          >
            Очистити
          </Button>

          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
            style={{ width: 90, color: "#4D3E34", fontSize: "15px" }}
          >
            Фільтр
          </Button>

          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
            style={{ width: 90, color: "#4D3E34", fontSize: "15px" }}
          >
            закрити
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#4D3E34" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    filterDropdownProps: {
      onOpenChange(open) {
        if (open) {
          setTimeout(() => searchInput.current?.select(), 100);
        }
      },
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const columns = [
    {
      title: "Організація",
      dataIndex: "organization",
      key: "organization",
      width: "30%",
      ...getColumnSearchProps("organization"),
    },
    {
      title: "ФІО",
      dataIndex: "person",
      key: "person",
      width: "30%",
      ...getColumnSearchProps("person"),
    },
    {
      title: "Джерело інформації",
      dataIndex: "source",
      key: "source",
      width: "20%",
      ...getColumnSearchProps("source"),
    },
    {
      title: "Місце, де відбулось",
      dataIndex: "location",
      key: "location",
      width: "20%",
      ...getColumnSearchProps("location"),
    },
    {
      title: "Статус",
      dataIndex: "status",
      key: "status",
      ...getColumnSearchProps("status"),
      sorter: (a, b) => a.status.length - b.status.length,
      sortDirections: ["descend", "ascend"],
    },
  ];

  const handleComplaintClick = () => {
    onPanelChange("#Cabinet", selectedComplaint);
};

    return (
        <>
        <div className="preview">
            <p>Перегляд</p>
            <h1>Всі скарги, що надійшли</h1>
        </div>

        <div className="panel-container">
            <Table
            columns={columns}
            dataSource={data}
            onRow={(record) => ({
                onClick: () => setSelectedComplaint(record),
            })}
            />

            {selectedComplaint ? (
            <div className="data-info">
                <div className="data-title">
                    <h1>Детально</h1>
                </div>

                <div className="details">
                    <div className="detail-item">
                        <h3>Організація:</h3>
                        <p>{selectedComplaint.organization}</p>
                    </div>

                    <div className="detail-item">
                        <h3>ФІО особи:</h3>
                        <p>{selectedComplaint.person}</p>
                    </div>

                    <div className="detail-item">
                        <h3>Звідки стало відомо:</h3>
                        <p>{selectedComplaint.source}</p>
                    </div>

                    <div className="detail-item">
                        <h3>Місце порушення:</h3>
                        <p>{selectedComplaint.location}</p>
                    </div>

                    <div className="detail-item">
                        <h3>Статус:</h3>
                        <p>{selectedComplaint.status}</p>
                    </div>

                    <div className="detail-item">
                        <h3>Детальна інформація:</h3>
                        <p>
                        {selectedComplaint.details || "Немає додаткової інформації"}
                        </p>
                    </div>
                    {selectedComplaint.files &&
                        selectedComplaint.files.length > 0 && (
                        <div className="detail-item">
                            <h3>Файли:</h3>
                            <ul>
                            {selectedComplaint.files.map((file, index) => (
                                <li key={index}>
                                <a
                                    href={file.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {file.name}
                                </a>
                                </li>
                            ))}
                            </ul>
                        </div>
                    )}
                    <div className="btn-item">
                    <a href="#Cabinet" onClick={handleComplaintClick}>Опрацювати...</a>
                    </div>
                </div>
            </div>
            ) : (
            <></>
            )}
        </div>
        </>
    );
};
