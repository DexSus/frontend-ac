import React, { useRef, useState, useEffect } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table } from "antd";
import Highlighter from "react-highlight-words";

import { fetchDataFromElastic } from '../../../../../../api/api.js';

export const ViewPanel = ({ onPanelChange }) => {
  const [dataTest, setDataTest] = useState([]);
  const [loading, setLoading] = useState(true); 


  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchDataFromElastic(); 
        setDataTest(result); 
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); 
      }
    };
    fetchData();
  }, []);
      

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
            dataSource={dataTest}
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
                    {selectedComplaint.files && selectedComplaint.files.length > 0 ? (
                      <div className="detail-item">
                          <h3>Файли:</h3>
                          <p>Присутні, перейдіть до детальної інформації</p>
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
                  ) : (
                      <p>Файли відсутні.</p>
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
