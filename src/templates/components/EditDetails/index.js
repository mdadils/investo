import React, { Component } from "react";
import { StyledForm, StyledModal } from "./style";
import PropTypes from "prop-types";

const noop = () => {};

class EditDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      email: this.props.email,
      phone: this.props.phone,
      city: this.props.address && this.props.address.city,
      website: this.props.website,
      company: this.props.company && this.props.company.name
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmitAndMergeData = this.handleSubmitAndMergeData.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const id = target.id;
    this.setState({
      [id]: target.value
    });
  }

  handleSubmitAndMergeData(e) {
    e.preventDefault();
    const { name, email, phone, city, website, company } = this.state;
    const onSubmit = (this.props && this.props.onSubmit) || noop;

    const returnData = {
      ...this.props,
      name,
      email,
      phone,
      website,
      address: {
        ...this.props.address,
        city
      },
      company: {
        ...this.props.company,
        name: company
      }
    };
    onSubmit(returnData);
  }

  render() {
    const onCancel = (this.props && this.props.onCancel) || noop;
    return (
      <>
        <StyledModal className=" card modal">
          <StyledForm className="edit-form modal-content shadow-lg">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="name"
                value={this.state.name}
                className="form-control"
                id="name"
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address:</label>
              <input
                type="email"
                value={this.state.email}
                className="form-control"
                id="email"
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="phone"
                value={this.state.phone}
                className="form-control"
                id="phone"
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">city</label>
              <input
                type="city"
                value={this.state.city}
                className="form-control"
                id="city"
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="website">website</label>
              <input
                type="url"
                value={this.state.website}
                className="form-control"
                id="website"
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="company">company</label>
              <input
                type="company"
                value={this.state.company}
                className="form-control"
                id="company"
                onChange={this.handleInputChange}
              />
            </div>

            <button
              type="button"
              onClick={onCancel}
              className="btn btn-secondary my-1"
            >
              Cancel
            </button>
            <button
              onClick={this.handleSubmitAndMergeData}
              type="submit"
              className="btn btn-primary mt-1"
            >
              Submit
            </button>
          </StyledForm>
        </StyledModal>
      </>
    );
  }
}

EditDetails.defaultProps = {
  name: "",
  email: "",
  phone: "",
  address: {},
  website: "",
  company: {}
};

EditDetails.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
  phone: PropTypes.string,
  address: PropTypes.object,
  website: PropTypes.string,
  company: PropTypes.object
};
export default EditDetails;
