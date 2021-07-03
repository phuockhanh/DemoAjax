package com.codegym.controller;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;

@WebServlet(name = "Servlet", urlPatterns = "/product")
public class Servlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String action = request.getParameter("action");
        if(action==null){
            action = "";
        }
        switch (action){
            case "test":{
                showForm(request,response);
                break;
            }
            default:{
                showIndex(request,response);
                break;
            }
        }
    }

    private void showForm(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.getRequestDispatcher("product/test.jsp").forward(request,response);
    }

    private void showIndex(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.sendRedirect("product/index.jsp");
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String action = request.getParameter("action");
        if(action==null){
            action = "";
        }
        switch (action){
            case "test":{
                getValue(request,response);
                break;
            }
        }
    }

    private void getValue(HttpServletRequest request, HttpServletResponse response) {
        String province = request.getParameter("province");
        String district = request.getParameter("district");
        String ward = request.getParameter("ward");
        System.out.println(province+" "+district+" "+ward);
    }
}
