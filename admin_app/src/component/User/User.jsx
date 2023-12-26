import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import queryString from "query-string";

import userAPI from "../Api/userAPI";
import Pagination from "../Shared/Pagination";
import Search from "../Shared/Search";

function User(props) {
  const [filter, setFilter] = useState({
    page: "1",
    limit: "4",
    search: "",
    status: true,
  });

  const [users, setUsers] = useState([]);
  const [totalPage, setTotalPage] = useState();

  useEffect(() => {
    const query = "?" + queryString.stringify(filter);

    const fetchAllData = async () => {
      const users = await userAPI.getAllUsers(query);
      console.log("res", users);
      setUsers(users);
      setTotalPage(users.totalPage);
    };
    fetchAllData();
  }, [filter]);

  const onPageChange = (value) => {
    setFilter({
      ...filter,
      page: value,
    });
  };

  const handlerSearch = (value) => {
    setFilter({
      ...filter,
      page: "1",
      search: value,
    });
    console.log(value);
  };

  const handleDelete = async (value) => {
    const query = "?" + queryString.stringify({ id: value._id });

    const response = await userAPI.delete(query);

    if (response.msg === "Thanh Cong") {
      setFilter({
        ...filter,
        status: !filter.status,
      });
    }
  };
  // <th>Permission</th>
  //<td>{user.id_permission.permission}</td>
  return (
    <div className="page-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Users</h4>
                <Search handlerSearch={handlerSearch} />

                <Link to="/user/create" className="btn btn-primary my-3">
                  New create
                </Link>

                <div className="table-responsive">
                  <table className="table table-striped table-bordered no-wrap">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Role</th>

                        <th>Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      {users &&
                        users.map((user) => (
                          <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.address}</td>
                            <td>{user.role}</td>

                            <td>
                              <div className="d-flex">
                                <Link
                                  to={"user/update/" + user.id}
                                  className="btn btn-success mr-1"
                                >
                                  Update
                                </Link>

                                <button
                                  type="button"
                                  style={{ cursor: "pointer", color: "white" }}
                                  onClick={() => handleDelete(user)}
                                  className="btn btn-danger"
                                >
                                  Delete
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
                <Pagination
                  filter={filter}
                  onPageChange={onPageChange}
                  totalPage={totalPage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer text-center text-muted">
        All Rights Reserved by Adminmart. Designed and Developed by{" "}
        <a href="https://www.facebook.com/KimTien.9920/">Tiền Kim</a>.
      </footer>
    </div>
  );
}

export default User;
