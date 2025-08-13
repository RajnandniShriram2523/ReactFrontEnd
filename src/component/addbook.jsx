import React from "react";
import AdminSidebar from "./adminslidebar";
import "./addbook.css";
import AddBook from "../service/Datasevice" 

export default class Addbook extends React.Component {
    constructor() {
        super();
        this.state = {
            book_title: "",
            book_author: "",
            book_price: "",
            book_published_date: "",
            isbn_code: "",
            category_id: "",
            status: "",
            msg: ""
        };
    }
    sendBookToServer = () => {
        let promise = AddBook.savebook(this.state);
        promise
            .then((result) => {
                this.setState({
                    msg: result.data.status,
                    book_title: "",
                    book_author: "",
                    book_price: "",
                    book_published_date: "",
                    isbn_code: "",
                    category_id: "",
                    status: "",

                });
            })
            .catch((err) => {
                this.setState({ msg: err.msg });
            });
    }
    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = () => {
        const {
            book_title,
            book_author,
            book_price,
            book_published_date,
            isbn_code,
            category_id,
            status
        } = this.state;

        if (
            !book_title ||
            !book_author ||
            !book_price ||
            !book_published_date ||
            !isbn_code ||
            !category_id ||
            !status
        ) {
            this.setState({ msg: "❗ All fields are required." });
            return;
        }

        this.setState({ msg: "✅ Book added successfully!" });

        // You can add API call or database logic here
    };

    handleClear = () => {
        this.setState({
            book_title: "",
            book_author: "",
            book_price: "",
            book_published_date: "",
            isbn_code: "",
            category_id: "",
            status: "",
            msg: "✅clear the form data"
        });
    };

    render() {
        return (
            <div className="main3">
                <AdminSidebar />
                <div className="form2">
                    <br />
                    <h2 style={{ color: "yellow" }}>ADD BOOK</h2>

                    <input
                        type="text"
                        name="book_title"
                        placeholder="Enter Book Title"
                        value={this.state.book_title}
                        onChange={this.handleInputChange}
                    /><br />

                    <input
                        type="text"
                        name="book_author"
                        placeholder="Enter Book Author"
                        value={this.state.book_author}
                        onChange={this.handleInputChange}
                    /><br />

                    <input
                        type="text"
                        name="book_price"
                        placeholder="Enter Book Price"
                        value={this.state.book_price}
                        onChange={this.handleInputChange}
                    /><br />

                    <input
                        type="text"
                        name="book_published_date"
                        placeholder="Enter Book Published Date"
                        value={this.state.book_published_date}
                        onChange={this.handleInputChange}
                    /><br />

                    <input
                        type="text"
                        name="isbn_code"
                        placeholder="Enter ISBN Code"
                        value={this.state.isbn_code}
                        onChange={this.handleInputChange}
                    /><br />

                    <input
                        type="text"
                        name="category_id"
                        placeholder="Enter Category Name"
                        value={this.state.category_id}
                        onChange={this.handleInputChange}
                    /><br />

                    <input
                        type="text"
                        name="status"
                        placeholder="Enter Total Copies"
                        value={this.state.status}
                        onChange={this.handleInputChange}
                    /><br />

                    <div className="buttons">
                        <button className="btn" type="button" onClick={this.sendBookToServer}>
                            Add Book
                        </button>
                        <button className="btn" type="button" onClick={this.handleClear}>
                            Clear
                        </button>
                    </div>

                    {/* Message shown at the bottom */}
                    <div className="message">
                        {this.state.msg && (
                            <p className={this.state.msg.startsWith("❗") ? "error" : "success"}>
                                {this.state.msg}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}
