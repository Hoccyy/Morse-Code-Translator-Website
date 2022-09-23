#include <iostream>
#include <map>

int main(){
    std::map <char, std::string> MorseAlphabet;
    MorseAlphabet['a']=" .- "; MorseAlphabet['b']=" -... ";
    
    std::cout << MorseAlphabet['a'];
}

//finish later...