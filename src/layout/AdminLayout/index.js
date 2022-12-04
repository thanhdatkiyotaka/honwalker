
import React from 'react';
import { AdminPage } from "../../component/Admin/mainPage"

export class AdminLayout extends React.Component {
    render() {
        const children = this.props.children;
        return <AdminPage body={children} />;
    }
}

export default AdminLayout;