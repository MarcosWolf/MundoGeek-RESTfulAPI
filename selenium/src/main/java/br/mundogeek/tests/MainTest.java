package br.mundogeek.tests;

import static br.mundogeek.core.DriverFactory.getDriver;
import static br.mundogeek.core.DriverFactory.killDriver;

import org.junit.Before;
import org.junit.Test;

public class MainTest {
	
	private MainPage page;
	
	@Before
	public void inicializa()
	{
		getDriver().get("https://www.mundogeek.marcoswolf.com.br");
		page = new MainPage(); 
	}
	
	@Test
	public void testePagina()
	{
		System.out.println("Oi");
	}
	
}
