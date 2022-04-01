import {
  Avatar,
  Badge,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserDetails,
  updateUserDetails,
} from "../redux/actions/users.actions";
import {
  Input,
  Loader,
  Message,
  SecondaryButton,
  IconButton,
} from "./elements";
import * as yup from "yup";
import { Edit } from "@mui/icons-material";

function EditComponent({ user }) {
  const [imgSrc, setImgSrc] = useState(user.profilePic);
  const { loading, error, success } = useSelector(
    (state) => state.users.updateUser
  );
  const dispatch = useDispatch();

  const validator = yup.object({
    name: yup.string().min(4).required(),
    age: yup.number().required(),
    mobile: yup
      .string()
      .matches(/^([0|+[0-9]{1,5})?([7-9][0-9]{9})$/, "enter with country code")
      .required(),
    gender: yup.string().required(),
    dob: yup.string().required(),
  });

  const submitter = (values, { setSubmitting, resetForm }) => {
    let data = {
      name: values.name,
      gender: values.gender,
      age: `${values.age}`,
      dob: values.dob.split("-").reverse().join("-"),
      mobile: `${values.mobile}`,
      profilePic: imgSrc,
    };

    dispatch(updateUserDetails(data, user.id));
    setSubmitting(false);
    resetForm();
    dispatch(getUserDetails(user.id));
  };

  const getBase64 = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImgSrc(reader.result);
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  };

  const { values, handleChange, handleSubmit, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        email: user.email,
        name: user.name,
        gender: user.gender,
        age: user.age,
        dob: user.dob.split("-").reverse().join("-"),
        mobile: user.mobile,
      },
      validationSchema: validator,
      onSubmit: submitter,
    });

  return (
    <div className="d-flex flex-column align-items-center m-auto" style={{maxWidth:"600px", padding:"2%"}}>
      {error && <Message type="error" message={error} />}
      {success && <Message type="success" message="Successfully Updated" />}

      <div title="Edit profile Picture" style={{padding:"2%"}}>
          <Badge
            badgeContent={
              <IconButton component="label">
                <Edit />
                <input
                  type="file"
                  id="profilePic"
                  name="profilePic"
                  style={{ display: "none" }}
                  accept="image/png, image/gif, image/jpeg"
                  onChange={(e) => {
                    // getBase64(e.target.files[0]);
                    const fsize = e.target.files[0].size;
                    const file = Math.round((fsize / 1024));
                    // The size of the file.
                    if (file >= 50) {
                        alert(
                          "File too Big, file should be less than 50kb");
                    } else {
                        getBase64(e.target.files[0]);
                    }
                  }}
                  hidden
                />
              </IconButton>
            }
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <Avatar src={imgSrc} sx={{ width: "100px", height: "100px" }} />
          </Badge>
      </div>
    
    <h2>User Details</h2>
      <Input
        name="name"
        id="name"
        label="name"
        placeholder="Name"
        margin="normal"
        className="input"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.name}
        required
      />
      <br />
      <small style={{ color: "red" }}>
        {errors.name && touched.name && errors.name}
      </small>

      <Input
        name="email"
        id="email"
        label="email"
        placeholder={values.email}
        margin="normal"
        className="input"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
        required
        disabled
      />
      <br />
      <RadioGroup
        row
        name="gender"
        label="gender"
        id="gender"
        sx={{ color: "gray" }}
        value={values.gender}
        onChange={handleChange}
        onBlur={handleBlur}
        margin="normal"
      >
        <FormControlLabel
          value="male"
          control={<Radio color="default" />}
          label="Male"
        />

        <FormControlLabel
          value="female"
          control={<Radio color="default" />}
          label="Female"
        />
      </RadioGroup>

      <small style={{ color: "red" }}>
        {errors.gender && touched.gender && errors.gender}
      </small>

      <Input
        name="age"
        id="age"
        label="age"
        placeholder="age"
        type="number"
        margin="normal"
        className="input"
        onChange={handleChange}
        onBlur={handleBlur}
        value={+values.age}
        required
      />
      <small style={{ color: "red" }}>
        {errors.age && touched.age && errors.age}
      </small>
      <Input
        name="dob"
        id="dob"
        label="Date of Birth"
        placeholder="dob"
        type="date"
        margin="normal"
        className="input"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.dob}
        required
      />

      <small style={{ color: "red" }}>
        {errors.date && touched.date && errors.date}
      </small>
      <br />
      <Input
        className="input"
        margin="normal"
        label="Mobile No."
        placeholder="Mobile"
        id="mobile"
        name="mobile"
        value={values.mobile}
        onChange={handleChange}
        onBlur={handleBlur}
        required
      />
      <small style={{ color: "red" }}>
        {errors.mobile && touched.mobile && errors.mobile}
      </small>
      <br />

      <SecondaryButton margin="normal" type="submit" onClick={handleSubmit}>
        {loading ? <Loader /> : "update"}
      </SecondaryButton>
    </div>
  );
}

export default EditComponent;
