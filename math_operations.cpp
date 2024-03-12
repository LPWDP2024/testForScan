// math_operations.cpp
#include <iostream>

class MathOperations {
public:
    // Function to calculate the square of a number
    static int square(int number) {
        return number * number;
    }

    // Function to calculate the cube of a number
    static int cube(int number) {
        return number * number * number;
    }
};

// Example usage
int main() {
    int number = 4;
    std::cout << "The square of " << number << " is " << MathOperations::square(number) << std::endl;
    std::cout << "The cube of " << number << " is " << MathOperations::cube(number) << std::endl;
    return 0;
}
