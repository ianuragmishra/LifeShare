import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
    const { user } = useSelector((state) => state.auth);
    return (
        <Layout>
            <div className="container">
                <div className="d-felx flex-column mt-4">
                    <h1>
                        Welcome Admin <i className="text-success">{user?.name}</i>
                    </h1>
                    <h3>Manage Blood Bank App </h3>
                </div>
            </div>
        </Layout>
    );
};

export default AdminHome;