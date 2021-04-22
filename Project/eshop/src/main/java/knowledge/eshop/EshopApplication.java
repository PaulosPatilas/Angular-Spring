package knowledge.eshop;

import knowledge.eshop.Entity.Customer;
import knowledge.eshop.Repository.CustomerRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Repository;

import java.util.stream.Stream;

@SpringBootApplication
public class EshopApplication {


	public static void main(String[] args) {
		SpringApplication.run(EshopApplication.class, args);
	}


	//@Bean
	//CommandLineRunner init(CustomerRepository repository) {
		//return args -> {
			//Stream.of("John", "Julie", "Jennifer", "Helen", "Rachel").forEach(name -> {
				//Customer cust = new Customer(name, name.toLowerCase() + "@domain.com");
				//repository.save(cust);
			//});
			//repository.findAll().forEach(System.out::println);
		//};
	//}
}