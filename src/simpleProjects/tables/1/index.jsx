import React, { useState } from "react";
import "./style.css";
import dump from "./dump.json";
import img1 from "./images/1.svg";
import img2 from "./images/2.svg";
import img3 from "./images/3.svg";
import img4 from "./images/4.svg";
import img5 from "./images/5.svg";
import { RxDotsHorizontal } from "react-icons/rx";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";

function Table1() {
  const images = { 1: img1, 2: img2, 3: img3, 4: img4, 5: img5 };

  const [data, setData] = useState(dump);

  const [isAllChecked, setIsAllChecked] = useState(false);

  const [page, setPage] = useState({
    startPage: 0,
    endPage: 2,
    currentPage: 1,
    size: 2,
    count: Math.ceil(data.length / 2),
  });

  const filteredData = data.slice(page.startPage, page.endPage);

  const handlePageSizeChange = (size) => {
    setPage({
      ...page,
      startPage: 0,
      endPage: size,
      count: Math.ceil(data.length / size),
      currentPage: 1,
      size,
    });
  };

  const handleChangePage = (index) => {
    setPage({
      ...page,
      startPage: index * page.size,
      endPage: page.size * (index + 1),
      currentPage: index + 1,
    });
  };

  const handleNext = () => {
    setPage({
      ...page,
      startPage: page.currentPage * page.size,
      endPage: page.size * (page.currentPage + 1),
      currentPage: page.currentPage + 1,
    });
  };

  const handlePrevious = () => {
    setPage({
      ...page,
      startPage: (page.currentPage - 2) * page.size,
      endPage: page.size * (page.currentPage - 1),
      currentPage: page.currentPage - 1,
    });
  };

  const handleCheck = (item) => {
    data.forEach((d) => {
      if (d.name === item.name) d.checked = !d.checked;
    });

    const isAllChecked = data.every((d) => d.checked);
    setIsAllChecked(isAllChecked);
    setData([...data]);
  };

  const checkAll = (e) => {
    data.forEach((d) => {
      d.checked = e.target.checked;
    });

    setData([...data]);
    setIsAllChecked(!isAllChecked);
  };

  const head = [
    { name: "name", checked: () => isAllChecked, onChange: checkAll },
    { name: "customers-images", checked: null, onChange: null },
    { name: "price", checked: null, onChange: null },
    { name: "type", checked: null, onChange: null },
    { name: "dot", checked: null, onChange: null },
  ];

  return (
    <div className="table-1">
      <table>
        <thead>
          <tr>
            <th className="name">
              <input
                checked={isAllChecked}
                onChange={checkAll}
                type="checkbox"
              />
              Name
            </th>
            <th className="customers-images">Customers</th>
            <th className="price">Price</th>
            <th className="type">Type</th>
            <th className="dot"></th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((d, index) => (
            <tr key={index * 10}>
              <td className="name">
                <input
                  onChange={() => handleCheck(d)}
                  checked={d.checked}
                  type="checkbox"
                />
                {d.name}
              </td>
              <td className="customers-images">
                {d.customers.map((customer, index) =>
                  !Array.isArray(customer) ? (
                    <img key={index * 100} src={images[customer]} />
                  ) : (
                    <div key={index * 100} className="img-showcase">
                      <span>{customer.length}+</span>
                      <div className="img-showcase-images">
                        {customer.map((c, index) => (
                          <img
                            key={index * 1000}
                            className="showcase-image"
                            src={images[c]}
                          />
                        ))}
                      </div>
                    </div>
                  )
                )}
              </td>
              <td className="price">${d.price}</td>
              <td className="type">
                <span className={d.type}>{d.type}</span>
              </td>
              <td className="dot">
                <RxDotsHorizontal />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="footer">
        <div className="pager-1">
          <div>
            <span>{1}</span> -{" "}
            <span>{page.size > data.length ? data.length : page.size}</span> of
            <span> {data.length}</span> - Display
          </div>
          <select
            onChange={(event) => handlePageSizeChange(+event.target.value)}
          >
            <option value="2">2</option>
            <option value="4">4</option>
            <option value="6">6</option>
            <option value="8">8</option>
            <option value="10">10</option>
          </select>
          rows
        </div>
        <div className="pager-2">
          <button
            disabled={page.startPage === 0}
            onClick={handlePrevious}
            className="previous"
          >
            <MdOutlineNavigateBefore className="icon" />
          </button>
          {new Array(page.count).fill(0).map((_, i) => (
            <button
              key={i * 1000}
              onClick={() => handleChangePage(i)}
              className={i + 1 === page.currentPage ? "active" : ""}
            >
              {i + 1}
            </button>
          ))}
          <button
            disabled={
              page.endPage === data.length || page.endPage > data.length
            }
            onClick={handleNext}
            className="next"
          >
            <MdOutlineNavigateNext className="icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Table1;
