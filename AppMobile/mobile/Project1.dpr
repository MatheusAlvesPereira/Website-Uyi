program Project1;

uses
  System.StartUpCopy,
  FMX.Forms,
  Unit1 in 'Unit1.pas' {login};

{$R *.res}

begin
  Application.Initialize;
  Application.CreateForm(Tlogin, login);
  Application.Run;
end.
