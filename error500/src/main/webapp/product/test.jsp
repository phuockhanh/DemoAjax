<%--
  Created by IntelliJ IDEA.
  User: ADMIN
  Date: 6/19/2021
  Time: 11:39
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>
<body>
    <form method="post">
        <select class="form-control" id="province" name="province" onchange="changeFunc();">
            <option value="" selected>=====</option>
        </select>
        <select class="form-control" id="district" name="district" onchange="changeFuncDistrict();">
            <option value="" selected>Quận huyện</option>
        </select>
        <select class="form-control" id="ward" name="ward" aria-placeholder="Quận huyện">
            <option value="" selected>Phường xã</option>
        </select>
        <input type="submit" value="Submit">
    </form>
    <script type="text/javascript" src="../multimedia/64.js"></script>
</body>
</html>
