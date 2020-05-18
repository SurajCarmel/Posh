package com.carmel.guesture;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.EditText;

import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;

import java.util.Objects;

public class Signin extends Fragment {
    EditText username,password;
    Button loginButton;
    String MobilePattern = "[0-9]{10}";
    String EMAIL_PATTERN = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"
            + "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{3,})$";
    String  PASSWORD_PATTERN = "^(?=.*[0-9])(?=.*[A-Z])(?=.* [@#$%^&+=])(?=\\S+$).{4,}$";
    @Override
    protected void onViewCreated(View view,@Nullable Bundle savedInstanceState){
        super.onViewCreated(view, savedInstanceState);
        username= findViewById(R.id.username);
        password=  findViewById(R.id.password);
        loginButton= findViewById(R.id.loginButton);
    }




    public Signin() {
        // Required empty public constructor
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.fragment_signin, container, false);
    }
}
